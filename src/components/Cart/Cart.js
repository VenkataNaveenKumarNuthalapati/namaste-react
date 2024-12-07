import React from "react";
import { useSelector } from "react-redux";
import FoodInfoCard from "../FoodInfoCard/FoodInfoCard";
import CartSummary from "../CartSummary/CartSummary";
import "./Cart.css";

const Cart = () => {
    // subscribing the store using selector
    const { items, itemQuantities, activeRestId } = useSelector(
        (store) => store.cart
    );
    // console.log(itemQuantities);
    const getPrice = () => {
        return items.length !== 0
            ? items.reduce(
                  (acc, current) =>
                      (acc + current.price || current.defaultPrice) *
                      itemQuantities[current.id],
                  0
              ) / 100
            : 0;
    };

    const stateGST = Math.round((getPrice() / 100) * 12 * 100) / 100 || 0;
    const centralGST = Math.round((getPrice() / 100) * 9 * 100) / 100 || 0;
    return (
        <div className="lg:flex justify-center">
            <CartSummary
                getPrice={getPrice}
                stateGST={stateGST}
                centralGST={centralGST}
                cartItems={items}
                activeRestId={activeRestId}
            />
            {items.length !== 0 && (
                <ul className="order-first transition-transform lg:h-[83vh] p-3 lg:w-7/12 border rounded-lg shadow-lg flex-col overflow-y-scroll scrollbar-hidden">
                    {items.map((info) => (
                        <FoodInfoCard
                            key={info.id}
                            info={info}
                            isInCart={true}
                            itemQuantities={itemQuantities}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
