import React from "react";
import { useSelector } from "react-redux";
import FoodInfoCard from "../FoodInfoCard/FoodInfoCard";

import "./Cart.css";
const Cart = () => {
    // subscribing the store using selector
    const cartItems = useSelector((store) => store.cart.items || []);

    const getPrice = () => {
        return (
            cartItems.reduce(
                (acc, current) => (isNaN(acc) ? acc.price : acc) + current.price
            ) / 100
        );
    };
    const stateGST = Math.round((getPrice() / 100) * 12 * 100) / 100;
    const centralGST = Math.round((getPrice() / 100) * 9 * 100) / 100;
    return (
        <div className="p-1 px-2">
            <div className="flex gap-1">
                <ul className="h-[83vh] p-3 w-7/12 border rounded-lg shadow-lg flex-col overflow-y-scroll scrollbar-hidden">
                    {cartItems.map((info) => (
                        <FoodInfoCard key={info.id} info={info} />
                    ))}
                </ul>
                <div className="h-[83vh] w-5/12 border shadow-lg rounded-md gap-3 mb-3 overflow-y-scroll scrollbar-hidden">
                    <div className="p-3 flex justify-between gap-3 border-b-2">
                        <h1 className="text-4xl font-bold text-right text-[#d7202e] p-0 mb-0">
                            Cart 🛒
                        </h1>
                        <button className="border-2 border-[#d7202e] font-bold text-lg p-2 px-4 text-[#d7202e] bg-white rounded-lg">
                            Add More Items
                        </button>
                    </div>
                    <h1 className="mx-10 text-3xl text-[#d7202e] m-2 text-center">
                        Cart Summary
                    </h1>
                    <h1 className="text-2xl text-center">
                        <span className="font-bold">{cartItems.length}</span>{" "}
                        Item's in your Cart.
                    </h1>
                    <div className="border-2 m-4">
                        <div className="p-3 mx-4 mt-4">
                            <div className="">
                                <input
                                    type="text"
                                    className="w-10/12 p-2 border-solid border-2 border-gray-400 rounded-s-lg"
                                    placeholder="Enter a Coupon Code"
                                />
                                <button className="p-2 bg-gray-200 font-bold ml-2 text-black rounded-r-lg border-2 border-gray-400">
                                    Apply
                                </button>
                            </div>
                            <div className="">
                                <input
                                    className="mt-2 w-10/12 p-2 border-solid border-2 border-gray-400 rounded-s-lg"
                                    type="text"
                                    placeholder="Enter Referral Code"
                                />
                                <button className="p-2 bg-gray-200 font-bold ml-2 text-black rounded-r-lg border-2 border-gray-400">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div className=" p-3 mx-4">
                            <p className="text-[18px] m-2 text-right">
                                Cart Items:{" "}
                                <span className="font-bold italic">
                                    {getPrice()}
                                </span>{" "}
                                /-
                            </p>
                            <p className="text-[18px] m-2 text-right">
                                State GST:{" "}
                                <span className="font-bold italic">
                                    {stateGST}
                                </span>{" "}
                                /-
                            </p>
                            <p className=" text-[18px] m-2 text-right">
                                Central GST:{" "}
                                <span className="font-bold italic">
                                    {centralGST}
                                </span>{" "}
                                /-
                            </p>
                            <h1 className="text-2xl m-2 text-right mb-5 ">
                                Total :{" "}
                                <span className="font-bold italic text-green-600">
                                    {Math.round(
                                        (getPrice() + stateGST + centralGST) *
                                            100
                                    ) / 100}
                                </span>{" "}
                                /-
                            </h1>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-around mt-2">
                        <button class="frutiger-button w-5/12">
                            <div class="inner">
                                <div class="top-white"></div>
                                <span class="text">Pay Now & Checkout</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
