import React, { useEffect, useState, useMemo } from "react";
import RestCards from "../RestCards/RestCards";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import OnMindDishes from "../OnMindDishes/OnMindDishes";
import SearchBar from "../SearchBar/SearchBar";
import { apiUrl } from "../../../utils/utils";
import "./Body.css";

const Body = () => {
    const [restCards, setRestCards] = useState([]); // Filtered list
    const [allRestCards, setAllRestCards] = useState([]); // Original list
    const [userInput, setUserInput] = useState("");
    const [isTopRatedActive, setIsTopRatedActive] = useState(false);
    const [titleOnMind, setTitleOnMind] = useState("");
    const [titleChainRest, setTitleChainRest] = useState("");
    const [onMindList, setOnMindList] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const restaurants =
                data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants || [];
            setTitleOnMind(
                data?.data?.cards[0]?.card?.card?.header?.title ||
                    "Something went wrong in Title"
            );
            setTitleChainRest(
                data?.data?.cards[1]?.card?.card?.header?.title ||
                    "Something went wrong in Title"
            );
            setOnMindList(
                data?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
            );
            setAllRestCards(restaurants);
            setRestCards(restaurants);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };

    const filteredRestCards = useMemo(() => {
        if (!userInput.trim()) return restCards;

        const input = userInput.trim().toLowerCase();
        return restCards.filter(({ info: { name } }) =>
            name.toLowerCase().includes(input)
        );
    }, [userInput, restCards]);

    const filterByRating = () => {
        setUserInput("");
        if (isTopRatedActive) {
            setRestCards(allRestCards);
        } else {
            const highRated = allRestCards.filter(
                ({ info: { avgRating } }) => avgRating >= 4.3
            );
            setRestCards(highRated);
        }
        setIsTopRatedActive(!isTopRatedActive);
    };

    return (
        <div className="body-container">
            <h1 className="heading text-3xl">{titleOnMind}</h1>
            <OnMindDishes onMindDishList={onMindList} />
            <h1 className="heading text-3xl">{titleChainRest}</h1>
            <SearchBar
                userInput={userInput}
                onSearchChange={setUserInput}
                isTopRatedActive={isTopRatedActive}
                onFilterClick={filterByRating}
            />
            {restCards.length === 0 ? (
                <ShimmerUI numberList={Array.from({ length: 12 })} />
            ) : (
                <RestCards restList={filteredRestCards} />
            )}
        </div>
    );
};

export default Body;
