import React from "react";
import { useNavigate } from "react-router-dom";
import { setRestId } from "../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux/dist/react-redux";
import "./RestCard.css";

const RestCard = ({ restObj, class_name }) => {
    const {
        id,
        name,
        cloudinaryImageId,
        locality,
        areaName,
        costForTwo,
        cuisines,
        avgRating,
    } = restObj?.info;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRestaurantClick = (isOpen, id, navigate) => {
        if (isOpen) {
            navigate("/restaurant/" + id);
            dispatch(setRestId(id));
        }
    };

    return (
        <div
            className={`${
                restObj?.info?.isOpen ? "cursor-pointer" : "cursor-not-allowed"
            } card-container h-[310px] pb-4 ${class_name}`}
            onClick={() =>
                handleRestaurantClick(restObj?.info?.isOpen, id, navigate)
            }
        >
            <img
                className="rest-card-image"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <p className="restName">{name}</p>
            <div className="rating">
                <img
                    src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-star-png-png-image_10023584.png"
                    alt="image"
                    className="star-image"
                />

                <span>{avgRating}</span>
            </div>
            <span className="castfor2">{costForTwo}</span>
            <div>
                <span className="location">{locality}, </span>
                <span className="location">{areaName}</span>
            </div>
            <p className="cuisines">{cuisines.join(", ")}</p>
        </div>
    );
};

export default RestCard;
