import React from "react";
import "./SearchBar.css"; // Optional if specific styles are needed for the search bar

const SearchBar = ({
    userInput,
    onSearchChange,
    isTopRatedActive,
    onFilterClick,
}) => {
    return (
        <div className="filter-container">
            <button
                className={
                    isTopRatedActive ? "rated-button" : "inactive-rated-button"
                }
                onClick={onFilterClick}
            >
                Top Rated Restaurant's
            </button>
            <input
                type="search"
                className="search-input border-2"
                value={userInput}
                placeholder="Search restaurants..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
