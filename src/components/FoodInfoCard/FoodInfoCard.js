import React from "react";
import { BASE_IMAGE_URL } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const FoodInfoCard = ({ info }) => {
    console.log(info);
    const { imageId, name, description, price, defaultPrice, ratings, id } =
        info;
    const foodObj = {
        imageId,
        name,
        description,
        price,
        defaultPrice,
        ratings,
        id,
    };

    const dispatch = useDispatch();
    return (
        <div className="bg-white flex justify-between m-2 shadow-lg p-2 rounded-lg my-2 px-2">
            <div className="w-10/12">
                <p className="text-2xl text-[#d6535e]">{name}</p>

                <p
                    className={
                        "flex align-middle " +
                        (ratings.aggregatedRating.rating >= 3.5
                            ? "text-green-700"
                            : "text-red-500")
                    }
                >
                    <img
                        src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-star-png-png-image_10023584.png"
                        alt="image"
                        className="star-image inline pb-1"
                    />
                    {ratings.aggregatedRating.rating || "0.0"}
                </p>
                <p className="font-bold">
                    ₹ {Math.round(price / 100) || defaultPrice / 100} /-
                </p>
                <p className="text-sm text-gray-500">
                    {description ||
                        "Freshly prepared with premium ingredients, delivering irresistible flavor in every bite."}
                </p>
            </div>

            <div className="w-2/12 relative h-full flex-col my-auto">
                <button
                    onClick={() => {
                        dispatch(addItem(foodObj));
                    }}
                    className="p-1 px-4 cursor-pointer absolute bottom-2 right-2  bg-black text-white rounded-md px-2 z-10"
                >
                    Add <sup>+</sup>
                </button>
                <img
                    className="rounded-lg h-28 w-full"
                    src={`${BASE_IMAGE_URL}w_300,h_300,c_fit/${
                        imageId ||
                        "FOOD_CATALOG/IMAGES/CMS/2024/7/21/b748f0cb-648f-4786-93ad-a733eb3d8e94_f0e66887-64ee-43fe-8013-89445fdd66f7.jpeg"
                    }`}
                    alt={name}
                />
            </div>
        </div>
    );
};

export default FoodInfoCard;
