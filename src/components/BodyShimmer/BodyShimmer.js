import React from "react";
import "./BodyShimmer.css";

const BodyShimmer = () => {
    return (
        <div className="body-shimmer-container">
            {/* Shimmer for title */}
            <div className="shimmer-title"></div>

            {/* Shimmer for On Mind Dishes */}
            <div className="shimmer-dish-container">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-[15%] h-[50px] md:h-[70px] lg:h-[90px] shimmer-dish-card"
                    ></div>
                ))}
            </div>

            {/* Shimmer for Chain Restaurants title */}
            <div className="shimmer-title"></div>

            {/* Shimmer for Restaurant Cards */}
            <div className="shimmer-cards-container">
                {Array.from({ length: 16 }).map((_, index) => (
                    <div key={index} className="shimmer-card"></div>
                ))}
            </div>
        </div>
    );
};

export default BodyShimmer;
