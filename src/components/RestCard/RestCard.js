import React from "react";
import { useNavigate } from "react-router-dom";

import "./RestCard.css";

const RestCard = ({ restObj, class_name }) => {
    const {
        id,
        name,
        cloudinaryImageId,
        locality,
        areaName,
        costForTwo,
        cuisines,
        avgRating,
    } = restObj?.info;

    const navigate = useNavigate();

    const handleRestaurantClick = (isOpen, id, navigate) => {
        if (isOpen) {
            navigate("/restaurant/" + id);
        }
    };

    return (
        <div
            className={`hover:bg-white hover:scale-105 transition duration-300 ease-in-out${
                restObj?.info?.isOpen ? "cursor-pointer" : "cursor-not-allowed"
            } card-container w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] min-h-[300px] pb-4 ${class_name} shadow-xl border border-gray-500`}
            onClick={() =>
                handleRestaurantClick(restObj?.info?.isOpen, id, navigate)
            }
        >
            <img
                className="rest-card-image w-full"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <div className="px-2">
                <p className="restName">{name}</p>
                <div className="rating">
                    <img
                        src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-star-png-png-image_10023584.png"
                        alt="image"
                        className="star-image"
                    />

                    <span>{avgRating}</span>
                </div>
                <span className="castfor2">{costForTwo}</span>
                <div>
                    <span className="location">{locality}, </span>
                    <span className="location">{areaName}</span>
                </div>
                <p className="cuisines">{cuisines.join(", ")}</p>
            </div>
        </div>
    );
};

export default RestCard;
