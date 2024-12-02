import React from "react";

import RestCard from "../RestCard/RestCard";
import "./RestCards.css";

const RestCards = ({ restList }) => {
    console.log(restList);
    return (
        <ul className="cards-container">
            {restList.map((restObj) => (
                <RestCard restObj={restObj} key={restObj.info.id} />
            ))}
        </ul>
    );
};

export default RestCards;
