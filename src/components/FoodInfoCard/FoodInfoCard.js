import React from "react";
import { BASE_IMAGE_URL } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../../utils/cartSlice";

const FoodInfoCard = ({ info, isInCart = false, itemQuantities, resId }) => {
    const { imageId, name, description, price, defaultPrice, ratings, id } =
        info;

    const dispatch = useDispatch();

    const handleUpdateQuantity = (operation) => {
        dispatch(updateQuantity({ id, ope: operation }));
    };

    const getPrice = () => Math.round(price / 100) || defaultPrice / 100;

    const renderCartControls = () => (
        <div className="text-center shadow-md border border-gray-400 rounded-md w-[90px] ml-auto mb-2">
            <button
                className="px-2 mx-2 text-2xl text-red-700"
                onClick={() => handleUpdateQuantity("-")}
            >
                -
            </button>
            <span className="text-2xl font-bold">{itemQuantities[id]}</span>
            <button
                className="px-2 text-2xl text-green-600"
                onClick={() => handleUpdateQuantity("+")}
            >
                +
            </button>
            <button
                onClick={() => dispatch(removeItem(id))}
                className="p-1 px-4 cursor-pointer absolute bottom-2 right-2 bg-red-500 border-2 text-white rounded-md z-10"
            >
                Remove
            </button>
        </div>
    );

    return (
        <div className="border border-gray-400 bg-gradient-to-t from-[#f6e2e3] hover:border-black scale-[98%] hover:scale-[101%] transition duration-300 ease-in-out flex justify-between m-2 p-2 rounded-md  hover:bg-white">
            <div className="w-10/12">
                <p className="text-2xl text-[#d6535e]">{name}</p>
                <p
                    className={`flex align-middle ${
                        ratings?.aggregatedRating?.rating >= 3.5
                            ? "text-green-700"
                            : "text-red-500"
                    }`}
                >
                    <img
                        src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-star-png-png-image_10023584.png"
                        alt="Rating Star"
                        className="star-image inline pb-1"
                    />
                    {ratings?.aggregatedRating?.rating || "0.0"}
                </p>
                <p className="font-bold">₹ {getPrice()} /-</p>
                <p className="text-sm text-gray-500">
                    {description ||
                        "Freshly prepared with premium ingredients, delivering irresistible flavor in every bite."}
                </p>
            </div>

            <div className="w-2/12 relative h-full flex-col my-auto items-center">
                {isInCart ? (
                    renderCartControls()
                ) : (
                    <button
                        onClick={() => {
                            dispatch(addItem(info));
                        }}
                        className="p-1 px-4 cursor-pointer absolute bottom-2 right-2 bg-black text-white rounded-md z-10"
                    >
                        Add <sup>+</sup>
                    </button>
                )}
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
