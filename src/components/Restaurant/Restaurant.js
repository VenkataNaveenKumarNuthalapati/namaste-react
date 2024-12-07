import { useParams } from "react-router-dom";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { useRestApiData } from "../../utils/useRestApiData";
import RestInfoCard from "../RestInfoCard/RestInfoCard";
import FoodInfoCard from "../FoodInfoCard/FoodInfoCard";
import "./Restaurant.css";
import { useState } from "react";

const Restaurant = () => {
    const { resId } = useParams();
    const [restaurantData, dataLists] = useRestApiData(resId);
    const [categoryShowId, setCategoryShowId] = useState(0);

    if (!restaurantData) {
        return <ShimmerUI numberList={[...Array(18)]} />;
    }

    const onCategoryClickHandle = (index) => {
        if (categoryShowId === index) {
            setCategoryShowId(null);
        } else {
            setCategoryShowId(index);
        }
    };

    return (
        <div className="rest-bg-container h-[86vh]">
            <RestInfoCard restaurantData={restaurantData} />

            <ul className="rec-cards-container  h-[83vh] scrollbar-hidden">
                {dataLists.map((each, index) => {
                    return (
                        <>
                            <div
                                onClick={() => onCategoryClickHandle(index)}
                                key={index + each?.card?.card?.title}
                                className="bg-white shadow-[#d7202e] shadow-sm w-full mt-2 p-2 flex align-middle justify-between cursor-pointer"
                            >
                                <span className="rec-heading text-lg">
                                    {each?.card?.card?.title}
                                </span>
                                {index === categoryShowId ? (
                                    <span>⬆️ </span>
                                ) : (
                                    <span>⬇️</span>
                                )}
                            </div>

                            {index === categoryShowId && (
                                <div className="w-full bg-white mt-0 p-2 border-2 shadow-[#d7202e] shadow-sm">
                                    {each?.card?.card?.itemCards.map(
                                        (eachObj) => (
                                            <FoodInfoCard
                                                key={eachObj?.card?.info?.id}
                                                info={eachObj?.card?.info}
                                            />
                                        )
                                    )}
                                </div>
                            )}
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default Restaurant;
