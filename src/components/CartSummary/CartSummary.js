import React from "react";
import { useNavigate } from "react-router-dom";
import emptyCart from "../../../public/images/emptyCart.png";

const CartSummary = ({
    getPrice,
    stateGST,
    centralGST,
    cartItems,
    activeRestId,
}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const targetPath =
            activeRestId === -1 ? "/" : `/restaurant/${activeRestId}`;
        navigate(targetPath);
    };

    const calculateTotal = () =>
        Math.round((getPrice() + stateGST + centralGST) * 100) / 100;

    const renderCartDetails = () => (
        <div className="border-2 m-4">
            <div className="p-3 mx-4 mt-4">
                {["Coupon Code", "Referral Code"].map((placeholder, index) => (
                    <div key={index} className="mt-2">
                        <input
                            type="text"
                            className="w-[80%] p-2 border-2 border-gray-400 rounded-s-lg"
                            placeholder={`Enter a ${placeholder}`}
                        />
                        <button className="p-2 bg-gray-200 font-bold ml-2 text-black rounded-r-lg border-2 border-gray-400">
                            Apply
                        </button>
                    </div>
                ))}
            </div>
            <div className="p-3 mx-4">
                {[
                    { label: "Cart Items", value: getPrice() },
                    { label: "State GST", value: stateGST },
                    { label: "Central GST", value: centralGST },
                ].map(({ label, value }, index) => (
                    <p key={index} className="text-[18px] m-2 text-right">
                        {label}:{" "}
                        <span className="font-bold italic">{value}</span> /-
                    </p>
                ))}
                <h1 className="text-2xl m-2 text-right mb-5">
                    Total:{" "}
                    <span className="font-bold italic text-green-600">
                        {calculateTotal()}
                    </span>{" "}
                    /-
                </h1>
            </div>
        </div>
    );

    return (
        <div className="py-4 bg-white h-[88vh] lg:w-[60%] border shadow-lg rounded-md gap-3 mb-3 overflow-y-scroll scrollbar-hidden">
            <div className="p-3 flex justify-between gap-3 border-b-2">
                <h1 className="text-4xl font-bold text-right text-[#d7202e]">
                    Cart 🛒
                </h1>
                <button
                    onClick={handleNavigate}
                    className="border-2 border-[#d7202e] font-bold text-lg p-2 px-4 text-[#d7202e] bg-white rounded-lg"
                >
                    {cartItems.length === 0 ? "Add Items" : "Add More Items"}
                </button>
            </div>
            <h1 className="mx-10 text-3xl text-[#d7202e] text-center">
                {cartItems.length === 0
                    ? "Your Cart is empty. Add some items"
                    : "Cart Summary"}
            </h1>
            {cartItems.length > 0 && (
                <h1 className="text-2xl text-center">
                    <span className="font-bold">{cartItems.length}</span> Item
                    {cartItems.length > 1 ? "s" : ""} in your Cart.
                </h1>
            )}

            {cartItems.length !== 0 ? (
                <>
                    {renderCartDetails()}
                    <div className="flex gap-3 justify-around mt-2">
                        <button className="frutiger-button w-5/12">
                            <div className="inner">
                                <div className="top-white"></div>
                                <span className="text">Pay Now & Checkout</span>
                            </div>
                        </button>
                    </div>
                </>
            ) : (
                <img
                    className="m-auto md:w-6/12 w-8/12 h-[70%] sm:h-[80%]"
                    src={emptyCart}
                    alt="Empty Cart"
                />
            )}
        </div>
    );
};

export default CartSummary;
