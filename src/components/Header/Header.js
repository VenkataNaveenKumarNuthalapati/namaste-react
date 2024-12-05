import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import globalContext from "../../../utils/useGlobalContext";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const { isOnline } = globalContext();

    return (
        <div className="header-container z-20">
            <div className="logo-container">
                <img
                    className="logo-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs91y4Dvl3NJ-aViGAKPP1uVMh3WIlRZppVw&s"
                    alt=""
                />
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
                        Cart
                        <sup className="bg-black text-white px-1 rounded-full font-bold">
                            1
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
