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
        <div className="p-2 lg:flex ">
            <RestInfoCard restaurantData={restaurantData} />
            <ul className="lg:h-[83vh] lg:w-[65%] overflow-scroll scrollbar-hidden justify-between mt-2 rounded-lg px-2">
                {dataLists.map((each, index) => (
                    <div
                        key={index}
                        className=" border-black border rounded-sm ml-1 mt-3 bg-white"
                    >
                        <div
                            onClick={() => onCategoryClickHandle(index)}
                            className="bg-white w-full p-1 flex items-center justify-between cursor-pointer"
                        >
                            <span className="rec-heading text-2xl font-medium pl-2">
                                {each?.card?.card?.title} (
                                {each?.card?.card?.itemCards.length} items)
                            </span>
                            {index === categoryShowId ? (
                                <span>⬆️</span>
                            ) : (
                                <span>⬇️</span>
                            )}
                        </div>

                        {index === categoryShowId && (
                            <div className="w-full">
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
