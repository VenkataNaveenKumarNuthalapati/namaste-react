import React from "react";
import "./ListShimmer.css";

const ListShimmer = ({ shimmerCount = 12 }) => {
    return (
        <ul className="rec-cards-container shimmer-list">
            {Array.from({ length: shimmerCount }, (_, index) => (
                <li
                    key={index}
                    className="shimmer-item bg-white  w-full mt-2 p-2 flex align-middle justify-between"
                >
                    <div className="shimmer-line shimmer-title"></div>
                    <div className="shimmer-line shimmer-arrow"></div>
                </li>
            ))}
        </ul>
    );
};

export default ListShimmer;
