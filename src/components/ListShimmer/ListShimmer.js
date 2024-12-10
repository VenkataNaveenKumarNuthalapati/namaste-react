import React from "react";
import "./ListShimmer.css";

const ListShimmer = ({ shimmerCount = 6 }) => {
    return (
        <ul className="rec-cards-container shimmer-list w-full lg:w-[70%]">
            <div className="shimmer-line p-4"></div>
            {Array.from({ length: shimmerCount }, (_, index) => (
                <li
                    key={index}
                    className="shimmer-item bg-white h-1/6 w-full mt-2 p-2 flex align-middle justify-between"
                >
                    <div className="shimmer-line shimmer-title"></div>
                    <div className="shimmer-line shimmer-arrow"></div>
                </li>
            ))}
        </ul>
    );
};

export default ListShimmer;
