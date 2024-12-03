import { useParams } from "react-router-dom";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { useRestApiData } from "../../../utils/useRestApiData";
import RestInfoCard from "../RestInfoCard/RestInfoCard";
import FoodInfoCard from "../FoodInfoCard/FoodInfoCard";
import "./Restaurant.css";

const Restaurant = () => {
    const { resId } = useParams();
    const [restaurantData, dataLists] = useRestApiData(resId);
    const keysList = Object.keys(dataLists);

    if (!restaurantData) {
        return <ShimmerUI numberList={[...Array(18)]} />;
    }

    return (
        <div className="rest-bg-container">
            <RestInfoCard restaurantData={restaurantData} />

            <ul className="rec-cards-container">
                {keysList.map((eachKey) => (
                    <>
                        {dataLists[eachKey].length !== 0 && (
                            <h1 key={eachKey} className="rec-heading">
                                {eachKey}
                            </h1>
                        )}

                        {dataLists[eachKey]?.map((category) => (
                            <FoodInfoCard
                                key={category?.card?.info?.id}
                                info={category?.card?.info || {}}
                            />
                        ))}
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Restaurant;
