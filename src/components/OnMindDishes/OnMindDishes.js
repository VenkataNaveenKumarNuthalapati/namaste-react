import React from "react";
import DishCard from "../DishCard/DishCard";
import "./OnMindDishes.css";

const OnMindDishes = ({ onMindDishList }) => {
    console.log(onMindDishList);

    return (
        <div className="dish-card-container">
            {onMindDishList.map((eachDish) => (
                <DishCard dish={eachDish} key={eachDish.id} />
            ))}
        </div>
    );
};

export default OnMindDishes;
