import React from "react";
import { useSelector } from "react-redux";
import FoodInfoCard from "../FoodInfoCard/FoodInfoCard";
import CartSummary from "../CartSummary/CartSummary";
import "./Cart.css";

const Cart = () => {
    // subscribing the store using selector
    const cartItems = useSelector((store) => store.cart.items || []);

    const getPrice = () => {
        return cartItems.length !== 0
            ? cartItems.reduce(
                  (acc, current) => acc + current.price || current.defaultPrice,
                  0
              ) / 100
            : 0;
    };
    console.log(cartItems, getPrice());
    const stateGST = Math.round((getPrice() / 100) * 12 * 100) / 100 || 0;
    const centralGST = Math.round((getPrice() / 100) * 9 * 100) / 100 || 0;
    return (
        <div className="p-1 px-2">
            <div className="flex gap-1 justify-center">
                {cartItems.length !== 0 && (
                    <ul className="transition-transform h-[83vh] p-3 w-7/12 border rounded-lg shadow-lg flex-col overflow-y-scroll scrollbar-hidden">
                        {cartItems.map((info) => (
                            <FoodInfoCard
                                key={info.id}
                                info={info}
                                isInCart={true}
                            />
                        ))}
                    </ul>
                )}
                <CartSummary
                    getPrice={getPrice}
                    stateGST={stateGST}
                    centralGST={centralGST}
                    cartItems={cartItems}
                />
            </div>
        </div>
    );
};

export default Cart;
