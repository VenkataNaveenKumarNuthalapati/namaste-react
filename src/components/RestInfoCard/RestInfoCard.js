import React from "react";
import "./RestInfoCard.css";
import { BASE_IMAGE_URL } from "../../../utils/utils";

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
    return (
        <div className="rest-card">
            <h1 className="rest-name">{name}</h1>
            <img
                className="rest-image"
                src={`${BASE_IMAGE_URL}w_660/${cloudinaryImageId}`}
                alt={name}
            />
            <div className="text-container">
                <h3 className="area">
                    {areaName}, {locality}
                </h3>
                <p className="rating">{costForTwoMessage}</p>
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
            </div>
        </div>
    );
};

export default RestInfoCard;
