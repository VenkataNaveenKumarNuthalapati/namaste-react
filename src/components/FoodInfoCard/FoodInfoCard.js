import React from "react";
import { BASE_IMAGE_URL } from "../../../utils/utils";

const FoodInfoCard = ({ info }) => {
    const { imageId, name } = info;
    return (
        <div className="rec-card">
            <img
                className="rec-image"
                src={`${BASE_IMAGE_URL}w_300,h_300,c_fit/${
                    imageId ||
                    "FOOD_CATALOG/IMAGES/CMS/2024/7/21/b748f0cb-648f-4786-93ad-a733eb3d8e94_f0e66887-64ee-43fe-8013-89445fdd66f7.jpeg"
                }`}
                alt={name}
            />
            <p>{name}</p>
        </div>
    );
};

export default FoodInfoCard;
