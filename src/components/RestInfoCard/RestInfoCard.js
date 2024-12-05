import React from "react";
import "./RestInfoCard.css";
import { BASE_IMAGE_URL } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const RestInfoCard = ({ restaurantData }) => {
    const {
        name,
        areaName,
        locality,
        costForTwoMessage,
        totalRatingsString,
        avgRating,
        cuisines,
        cloudinaryImageId,
    } = restaurantData;
    const navigate = useNavigate();

    return (
        <div className="rest-card">
            <img
                className="rest-image"
                src={`${BASE_IMAGE_URL}w_660/${cloudinaryImageId}`}
                alt={name}
            />
            <h1 className="font-bold text-[26px] text-center my-2">{name}</h1>
            <div className="text-container">
                <h3 className="area">
                    {areaName}, {locality}
                </h3>
                <p className="rating font-bold">{costForTwoMessage}</p>
                <p className="avg-rating">
                    <img
                        src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-star-png-png-image_10023584.png"
                        alt="image"
                        className="star-image inline pb-1"
                    />
                    Avg ratings: {avgRating}{" "}
                    <span className="top-rating">({totalRatingsString})</span>
                </p>
                <p className="cuisines">{cuisines?.join(", ")}</p>
                <div className="text-center">
                    <button
                        className="bg-[#d7202e] text-white rounded-md p-1 px-6"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestInfoCard;
