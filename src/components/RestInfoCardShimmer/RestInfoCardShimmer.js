import React from "react";
import "./RestInfoCardShimmer.css";

const RestInfoCardShimmer = () => {
    return (
        <div className="rest-card-shimmer m-2 h-min-[90vh] w-full lg:w-[47%]">
            {/* Shimmer Image */}
            <div className="shimmer-image"></div>

            {/* Shimmer Title */}
            <div className="shimmer-title"></div>

            {/* Shimmer Text Blocks */}
            <div className="text-container">
                <div className="shimmer-line shimmer-area"></div>
                <div className="shimmer-line shimmer-cost"></div>
                <div className="shimmer-line shimmer-rating"></div>
                <div className="shimmer-line shimmer-cuisines"></div>
            </div>

            {/* Shimmer Button */}
            <div className="text-center">
                <div className="shimmer-button"></div>
            </div>
        </div>
    );
};

export default RestInfoCardShimmer;
