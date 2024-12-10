import React, { useEffect, useState, useMemo, useCallback } from "react";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import BodyShimmer from "../BodyShimmer/BodyShimmer";

import OnMindDishes from "../OnMindDishes/OnMindDishes";
import SearchBar from "../SearchBar/SearchBar";
import RestCards from "../RestCards/RestCards";
import { apiUrl } from "../../utils/utils";
import globalContext from "../../utils/useGlobalContext";

const Body = () => {
    const [state, setState] = useState({
        restCards: [], // Filtered list
        allRestCards: [], // Original list
        userInput: "",
        isTopRatedActive: false,
        titleOnMind: "",
        titleChainRest: "",
        onMindList: [],
        isLoading: true,
    });

    const { isOnline } = globalContext();

    // Destructure state for easy access
    const {
        restCards,
        allRestCards,
        userInput,
        isTopRatedActive,
        titleOnMind,
        titleChainRest,
        onMindList,
        isLoading,
    } = state;

    useEffect(() => {
        fetchRestaurants();
    }, []); // Using restCards and isLoading as dependencies

    const fetchRestaurants = useCallback(async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const restaurants =
                data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;

            // Update all states at once

            setState((prevState) => ({
                ...prevState,
                titleOnMind:
                    data?.data?.cards[0]?.card?.card?.header?.title ||
                    "Not Delivering yourLocation Unserviceable - We don’t have any services here till now. Try changing location.",
                titleChainRest:
                    data?.data?.cards[1]?.card?.card?.header?.title ||
                    undefined,
                onMindList:
                    data?.data?.cards[0]?.card?.card?.imageGridCards?.info ||
                    [],
                allRestCards: restaurants || [],
                restCards: restaurants || [],
                isLoading: false, // Set loading state to false after fetching
            }));
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    }, [state]);

    const filteredRestCards = useMemo(() => {
        if (!userInput.trim()) return restCards;

        const input = userInput.trim().toLowerCase();
        return restCards.filter(({ info: { name } }) =>
            name.toLowerCase().includes(input)
        );
    }, [userInput, restCards]);

    const filterByRating = () => {
        setState((prevState) => {
            const newRestCards = isTopRatedActive
                ? prevState.allRestCards
                : prevState.allRestCards.filter(
                      ({ info: { avgRating } }) => avgRating >= 4.3
                  );
            return {
                ...prevState,
                restCards: newRestCards,
                isTopRatedActive: !isTopRatedActive,
                userInput: "", // Reset search input
            };
        });
    };

    if (isLoading) {
        return <BodyShimmer />;
    }

    return (
        <div className="relative body-container h-min-[90vh] mt-14">
            {!isOnline && (
                <div className="absolute inset-0 bg-black bg-opacity-70 z-20 pointer-events-none">
                    <center className="text-2xl text-gray-200 mt-10">
                        Your are Offline, Please Check your Internet Connection
                    </center>
                </div>
            )}
            <h1 className="text-3xl mt-4">{titleOnMind}</h1>
            <OnMindDishes onMindDishList={onMindList} />
            <h1 className="heading text-3xl mb-4">{titleChainRest}</h1>
            {titleChainRest !== undefined && (
                <SearchBar
                    userInput={userInput}
                    onSearchChange={(input) =>
                        setState((prevState) => ({
                            ...prevState,
                            userInput: input,
                        }))
                    }
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

// const Body = () => {
//     return <div>Wrapper</div>;
// };

// export default Body;

export default Body;
