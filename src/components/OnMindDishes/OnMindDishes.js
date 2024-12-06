import React from "react";
import DishCard from "../DishCard/DishCard";
import "./OnMindDishes.css";

const OnMindDishes = ({ onMindDishList }) => {
    return (
        <div className="dish-card-container scrollbar-hidden">
            {onMindDishList.map((eachDish) => (
                <DishCard dish={eachDish} key={eachDish.id} />
            ))}
        </div>
    );
};

export default OnMindDishes;
