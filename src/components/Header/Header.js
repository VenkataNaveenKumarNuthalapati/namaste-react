import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isOnline, setIsOnline] = useState(true);

    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    return (
        <div className="header-container">
            <div className="logo-container">
                <img
                    className="logo-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs91y4Dvl3NJ-aViGAKPP1uVMh3WIlRZppVw&s"
                    alt=""
                />
            </div>
            <ul className="features-container">
                <li className={isOnline ? "text-green-400" : "text-red-400"}>
                    {isOnline ? "Online: 🟢" : "Offline: 🔴"}
                </li>
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
                    <NavLink to="/cart">Cart</NavLink>
                </li>
                <button
                    className="login-button"
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
