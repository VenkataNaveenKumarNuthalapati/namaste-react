import React from "react";

import { onMindApi } from "../../../utils/utils";
import "./DishCard.css";
const DishCard = ({ dish }) => {
    console.log(dish);
    return <img src={onMindApi + dish.imageId} className="w-28" />;
};

export default DishCard;
