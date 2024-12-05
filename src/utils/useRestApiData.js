import { useEffect, useState } from "react";
import { restDetailsAPI } from "./utils";

export const useRestApiData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);

    const [dataLists, setDataLists] = useState({});

    useEffect(() => {
        getFetchData();
    }, []);

    const getFetchData = async () => {
        try {
            const response = await fetch(`${restDetailsAPI}${resId}`);
            const json = await response.json();
            const regular =
                json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR;
            const dynamicLists = regular.cards.filter((eachList) => {
                return (
                    eachList?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
            });

            const restaurantInfo = json?.data?.cards[2]?.card?.card?.info || {};

            setDataLists(dynamicLists);
            setRestaurantData(restaurantInfo);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };
    return [restaurantData, dataLists];
};
