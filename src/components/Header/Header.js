import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import globalContext from "../../utils/useGlobalContext";
import logo3 from "../../../public/images/logo3.png";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const { isOnline } = globalContext();
    // subscribing the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header-container z-20">
            <div className="logo-container flex items-end border-black border-l-[#d7202e] border-b-2 border-l-8 p-2">
                <img className="logo-image" src={logo3} alt="" />
                <p className="text-[#d7202e] text-2xl font-bold ">
                    Foodie Haven
                </p>
            </div>

            <ul className="features-container">
                <span
                    className={
                        isOnline ? "text-green-400 text-lg" : "text-red-400"
                    }
                >
                    {isOnline ? "Online 🟢  " : "Offline: 🔴  "}
                </span>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        Cart🛒
                        <sup className="bg-black text-white px-1 rounded-full font-bold">
                            {cartItems.length}
                        </sup>
                    </NavLink>
                </li>
                <button
                    className="login-button rounded-lg"
                    onClick={() => {
                        setIsLogin(!isLogin);
                    }}
                >
                    {isLogin ? "Logout" : "Login"}
                </button>
            </ul>
        </div>
    );
};

export default Header;
