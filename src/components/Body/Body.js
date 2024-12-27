import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import BodyShimmer from "../BodyShimmer/BodyShimmer";
import OnMindDishes from "../OnMindDishes/OnMindDishes";
import SearchBar from "../SearchBar/SearchBar";
import RestCards from "../RestCards/RestCards";
import globalContext from "../../utils/useGlobalContext";

import {
    fetchRestaurants,
    setUserInput,
    toggleTopRated,
} from "../../utils/bodySlice";

const Body = () => {
    const dispatch = useDispatch();
    const {
        restCards,
        allRestCards,
        userInput,
        isTopRatedActive,
        titleOnMind,
        titleChainRest,
        onMindList,
        isLoading,
    } = useSelector((state) => state.body);

    const { isOnline } = globalContext();

    useEffect(() => {
        if (!allRestCards) {
            dispatch(fetchRestaurants());
        }
    }, [allRestCards, dispatch]);

    const filteredRestCards = restCards.filter(({ info: { name } }) =>
        name.toLowerCase().includes(userInput.trim().toLowerCase())
    );

    if (isLoading) {
        return <BodyShimmer />;
    }

    return (
        <div className="relative body-container h-min-[90vh] mt-14 px- py-2 h-min-[90vh] overflow-scroll">
            {!isOnline && (
                <div className="absolute inset-0 bg-black bg-opacity-70 z-20 pointer-events-none">
                    <center className="text-2xl text-gray-200 mt-10">
                        You are Offline, Please Check your Internet Connection
                    </center>
                </div>
            )}
            <h1 className="text-3xl mt-4 px-4">{titleOnMind}</h1>
            <OnMindDishes onMindDishList={onMindList} />
            <h1 className="heading text-3xl px-4 mb-4">{titleChainRest}</h1>
            {titleChainRest !== undefined && (
                <SearchBar
                    userInput={userInput}
                    onSearchChange={(input) => dispatch(setUserInput(input))}
                    isTopRatedActive={isTopRatedActive}
                    onFilterClick={() => dispatch(toggleTopRated())}
                />
            )}
            {titleChainRest !== undefined && restCards.length === 0 ? (
                <ShimmerUI numberList={Array.from({ length: 15 })} />
            ) : (
                <RestCards restList={filteredRestCards} />
            )}
        </div>
    );
};

export default Body;
