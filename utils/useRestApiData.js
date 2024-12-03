import { useEffect, useState } from "react";
import { restDetailsAPI } from "./utils";

export const useRestApiData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
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
            const recommendationCard = regular?.cards[2]?.card?.card || {};
            const restaurantInfo = json?.data?.cards[2]?.card?.card?.info || {};

            if (regular?.cards) {
                const dynamicLists = {};
                // Loop through the cards and dynamically extract the lists
                regular.cards.forEach((card, index) => {
                    const category = card?.card?.card?.title || `card${index}`;
                    dynamicLists[category] = card?.card?.card?.itemCards || [];
                });

                setDataLists(dynamicLists);
            }
            setRestaurantData(restaurantInfo);
            setRecommendations(recommendationCard.itemCards || []);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };
    return [restaurantData, dataLists];
};
