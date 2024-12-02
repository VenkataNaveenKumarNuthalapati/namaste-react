import React from "react";

import { onMindApi } from "../Body/utils";
import "./DishCard.css";
const DishCard = ({ dish }) => {
    console.log(dish);
    return (
        <a href={dish.action.link}>
            <img src={onMindApi + dish.imageId} className="dish-image" />
        </a>
    );
};

export default DishCard;
