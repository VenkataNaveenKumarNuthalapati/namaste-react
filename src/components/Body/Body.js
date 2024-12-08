import React, { useEffect, useState, useMemo } from "react";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import BodyShimmer from "../BodyShimmer/BodyShimmer";

import OnMindDishes from "../OnMindDishes/OnMindDishes";
import SearchBar from "../SearchBar/SearchBar";
import RestCards from "../RestCards/RestCards";
import { apiUrl } from "../../utils/utils";
import globalContext from "../../utils/useGlobalContext";
import "./Body.css";

const Body = () => {
    const [restCards, setRestCards] = useState([]); // Filtered list
    const [allRestCards, setAllRestCards] = useState([]); // Original list
    const [userInput, setUserInput] = useState("");
    const [isTopRatedActive, setIsTopRatedActive] = useState(false);
    const [titleOnMind, setTitleOnMind] = useState("");
    const [titleChainRest, setTitleChainRest] = useState("");
    const [onMindList, setOnMindList] = useState([]);
    const { isOnline } = globalContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const restaurants =
                data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;
            setTitleOnMind(
                data?.data?.cards[0]?.card?.card?.header?.title ||
                    "Not Delivering yourLocation Unserviceable - We don’t have any services here till now. Try changing location."
            );
            setTitleChainRest(
                data?.data?.cards[1]?.card?.card?.header?.title || undefined
            );
            setOnMindList(
                data?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
            );
            setAllRestCards(restaurants || []);
            setRestCards(restaurants || []);
            setIsLoading(false);
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

    if (isLoading) {
        return <BodyShimmer />;
    }

    return (
        <div className="relative body-container h-min-[90vh]">
            {!isOnline && (
                <div className="absolute inset-0 bg-black bg-opacity-70 z-20 pointer-events-none">
                    <center className="text-2xl text-gray-200 mt-10">
                        Your are Offline, Please Check your Internet Connection
                    </center>
                </div>
            )}
            <h1 className="heading text-3xl">{titleOnMind}</h1>
            <OnMindDishes onMindDishList={onMindList} />
            <h1 className="heading text-3xl">{titleChainRest}</h1>
            {titleChainRest !== undefined && (
                <SearchBar
                    userInput={userInput}
                    onSearchChange={setUserInput}
                    isTopRatedActive={isTopRatedActive}
                    onFilterClick={filterByRating}
                />
            )}
            {titleChainRest !== undefined && restCards.length === 0 ? (
                <ShimmerUI numberList={Array.from({ length: 12 })} />
            ) : (
                <RestCards restList={filteredRestCards} />
            )}
        </div>
    );
};

export default Body;
