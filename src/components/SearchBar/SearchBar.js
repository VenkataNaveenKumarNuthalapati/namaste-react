import React from "react";
import "./SearchBar.css"; // Optional if specific styles are needed for the search bar

const SearchBar = ({
    userInput,
    onSearchChange,
    isTopRatedActive,
    onFilterClick,
}) => {
    return (
        <div className="filter-container px-4">
            <button
                className={
                    isTopRatedActive
                        ? "rated-button bg-[#d21d29] text-white px-4 py-2.5 mr-2 rounded-lg"
                        : "rated-button bg-gray-300 text-black px-4 py-2 mr-2  rounded-lg"
                }
                onClick={onFilterClick}
            >
                Top Rated Restaurant's
            </button>
            <input
                type="search"
                className="p-2 border border-gray-500 rounded-lg outline-none"
                value={userInput}
                placeholder="Search restaurants..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
