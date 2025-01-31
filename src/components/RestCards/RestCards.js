import React from "react";
import RestCard from "../RestCard/RestCard";
import higherOrderComp from "../../utils/higherOrderComp";

import "./RestCards.css";

const LabelRestCard = higherOrderComp(RestCard);

const RestCards = ({ restList }) => {
    return (
        <ul className="cards-container flex items-stretch">
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
