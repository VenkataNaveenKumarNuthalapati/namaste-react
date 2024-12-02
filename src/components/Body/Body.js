import React, { useEffect, useState, useMemo } from "react";
import RestCards from "../RestCards/RestCards";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import "./Body.css";

const Body = () => {
    const [restCards, setRestCards] = useState([]); // Filtered list
    const [allRestCards, setAllRestCards] = useState([]); // Original list
    const [userInput, setUserInput] = useState("");
    const [isTopRatedActive, setIsTopRatedActive] = useState(false);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5057232&lng=80.049922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const data = await response.json();
            const restaurants =
                data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants || [];
            setAllRestCards(restaurants); // Store original list
            setRestCards(restaurants); // Initialize filtered list
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };

    // Filtered Restaurants (Derived State)
    const filteredRestCards = useMemo(() => {
        if (!userInput.trim()) return restCards;

        const input = userInput.trim().toLowerCase();
        return restCards.filter(({ info: { name } }) =>
            name.toLowerCase().includes(input)
        );
    }, [userInput, restCards]);

    // Filter by Rating
    const filterByRating = () => {
        setUserInput(""); // Clear user input for this filter
        if (isTopRatedActive) {
            setRestCards(allRestCards); // Reset to original list
        } else {
            const highRated = allRestCards.filter(
                ({ info: { avgRating } }) => avgRating >= 4.3
            );
            setRestCards(highRated); // Set filtered list
        }
        setIsTopRatedActive(!isTopRatedActive);
    };

    return (
        <div className="body-container">
            <h1 className="heading">
                Restaurants with online food delivery in Ongole
            </h1>

            <div className="filter-container">
                <button
                    className={
                        isTopRatedActive
                            ? "rated-button"
                            : "inactive-rated-button"
                    }
                    onClick={filterByRating}
                >
                    Top Rated Restaurant's
                </button>

                <input
                    type="search"
                    className="search-input"
                    value={userInput}
                    placeholder="Search restaurants..."
                    onChange={(e) => setUserInput(e.target.value)}
                />
            </div>

            {restCards.length === 0 ? (
                <ShimmerUI numberList={Array.from({ length: 12 })} />
            ) : (
                <RestCards restList={filteredRestCards} />
            )}
        </div>
    );
};

export default Body;
