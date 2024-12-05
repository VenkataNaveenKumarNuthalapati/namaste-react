import React from "react";
import RestCard from "../RestCard/RestCard";
import higherOrderComp from "../../../utils/HigherOrderComp";

import "./RestCards.css";

const LabelRestCard = higherOrderComp(RestCard);
const RestCards = ({ restList }) => {
    return (
        <ul className="cards-container">
            {restList.map((restObj) =>
                restObj.isOpen ? (
                    <LabelRestCard
                        restObj={restObj}
                        key={restObj.info.id}
                        class_name={"w-full"}
                    />
                ) : (
                    <RestCard restObj={restObj} key={restObj.info.id} />
                )
            )}
        </ul>
    );
};

export default RestCards;
