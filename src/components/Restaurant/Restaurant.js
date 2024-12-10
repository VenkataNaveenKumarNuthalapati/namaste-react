import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRestaurantDetails } from "../../utils/restaurantSlice";
import RestInfoCard from "../RestInfoCard/RestInfoCard";
import FoodInfoCard from "../FoodInfoCard/FoodInfoCard";
import RestInfoCardShimmer from "../RestInfoCardShimmer/RestInfoCardShimmer";
import ListShimmer from "../ListShimmer/ListShimmer";
import { setRestId } from "../../utils/cartSlice";
import "./Restaurant.css";

const Restaurant = () => {
    const { resId } = useParams();
    const dispatch = useDispatch();
    const { itemQuantities, activeRestId } = useSelector((store) => store.cart);
    const { restaurantData, dataLists, isLoading } = useSelector(
        (state) => state.restaurant
    );

    const [categoryShowId, setCategoryShowId] = useState(0);

    useEffect(() => {
        if (isLoading || !restaurantData || resId !== activeRestId) {
            dispatch(fetchRestaurantDetails(resId));
            dispatch(setRestId(resId));
        }
    }, []);

    const onCategoryClickHandle = (index) => {
        setCategoryShowId((prev) => (prev === index ? null : index));
    };

    if (isLoading || !restaurantData) {
        return (
            <div className="rest-bg-container h-[86vh] lg:flex">
                <RestInfoCardShimmer />
                <ListShimmer />
            </div>
        );
    }

    return (
        <div className="p-2 mx-4 lg:flex justify-between">
            <RestInfoCard restaurantData={restaurantData} />
            <ul className="lg:h-[83vh] lg:w-[58%] overflow-scroll scrollbar-hidden">
                {dataLists.map((each, index) => (
                    <div key={index}>
                        <div
                            onClick={() => onCategoryClickHandle(index)}
                            className="bg-white shadow-[#d7202e] shadow-sm w-full mt-2 p-2 flex align-middle justify-between cursor-pointer"
                        >
                            <span className="rec-heading text-lg">
                                {each?.card?.card?.title}
                            </span>
                            {index === categoryShowId ? (
                                <span>⬆️</span>
                            ) : (
                                <span>⬇️</span>
                            )}
                        </div>

                        {index === categoryShowId && (
                            <div className="w-full bg-white mt-0 p-2 border-2 shadow-[#d7202e] shadow-sm">
                                {each?.card?.card?.itemCards.map((eachObj) => (
                                    <FoodInfoCard
                                        resId={resId}
                                        key={eachObj?.card?.info?.id}
                                        info={eachObj?.card?.info}
                                        isInCart={
                                            itemQuantities[
                                                eachObj?.card?.info?.id
                                            ] === undefined
                                                ? false
                                                : true
                                        }
                                        itemQuantities={itemQuantities}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Restaurant;
