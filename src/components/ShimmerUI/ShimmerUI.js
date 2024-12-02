import React from "react";

import "./ShimmerUI.css";

const ShimmerUI = ({ numberList }) => {
    return (
        <ul className="shimmer-cards-container">
            {numberList.map((num, index) => (
                <div className="shimmer-card-container" key={index}>
                    <img
                        className="rest-card-shimmer-image"
                        src="https://cdn2.vectorstock.com/i/1000x1000/26/11/restaurant-food-and-beverage-white-background-vector-19572611.jpg"
                    />
                    <p className="restName"></p>
                    <div className="rating-shimmer">
                        <span>Loading...</span>
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default ShimmerUI;
