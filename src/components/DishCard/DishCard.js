import React from "react";

import { onMindApi } from "../../utils/utils";
import "./DishCard.css";
const DishCard = ({ dish }) => {
    return (
        <img
            src={onMindApi + dish.imageId}
            className="w-[100px] lg:w-[120px]"
        />
    );
};

export default DishCard;
