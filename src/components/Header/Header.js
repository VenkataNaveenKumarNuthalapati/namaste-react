import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import globalContext from "../../utils/useGlobalContext";
import logo3 from "../../../public/images/logo3.png";
import { useSelector } from "react-redux";
import "./Header.css";

// import redWifi from "../../../public/images/redWifi.png";

import greenwifi from "../../../public/images/greenwifi.png";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isHamburger, setIsHamburger] = useState(false);

    const { isOnline } = globalContext();
    const cartItems = useSelector((store) => store.cart.items);

    const renderNavLinks = () => (
        <>
            <li>
                <NavLink className="feature" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="feature" to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink className="feature" to="/contact">
                    Contact Us
                </NavLink>
            </li>
            <li>
                <NavLink className="feature" to="/cart">
                    Cart🛒
                    <sup className="bg-black text-white px-1 rounded-full font-bold">
                        {cartItems.length}
                    </sup>
                </NavLink>
            </li>
            <button
                className="p-1.5 px-4 text-white bg-[#d21d29] rounded-lg"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? "Logout" : "Login"}
            </button>
        </>
    );

    return (
        <div className="fixed w-full top-[-10px] z-20">
            <div className="header-container">
                {/* Logo and Online Status */}
                <div className="logo-container flex items-end border-black border-l-[#d7202e] border-b-2 border-l-8 p-2">
                    <img
                        className="logo-image"
                        src={logo3}
                        alt="Foodie Haven Logo"
                    />
                    <p className="text-[#d7202e] text-2xl font-bold">
                        Foodie Haven
                    </p>
                </div>

                {isOnline ? (
                    <img
                        className="lg:hidden w-[37px] m-0 h-[30px]"
                        src={greenwifi}
                        alt="green"
                    />
                ) : (
                    <span className="lg:hidden text-4xl">Offline: 🔴</span>
                )}

                {/* Hamburger Menu Buttons */}
                <button
                    className={`${isHamburger && "hidden"} lg:hidden`}
                    onClick={() => setIsHamburger(true)}
                >
                    <i className="fa-solid fa-bars mr-2 text-3xl"></i>
                </button>
                <button
                    className={`${!isHamburger && "hidden"} lg:hidden`}
                    onClick={() => setIsHamburger(false)}
                >
                    <i className="fa-solid fa-x mr-2 text-3xl"></i>
                </button>

                {/* Desktop Navigation */}
                <ul className="mt-2 hidden border-2 w-1/2 2xl:w-1/2 lg:flex lg:justify-around items-center list-none p-2.5">
                    {isOnline ? (
                        <img
                            className="w-[37px] m-0 h-[30px]"
                            src={greenwifi}
                            alt="green"
                        />
                    ) : (
                        <span className="text-4xl">Offline: 🔴</span>
                    )}

                    {renderNavLinks()}
                </ul>
            </div>

            {/* Mobile Navigation */}
            {isHamburger && (
                <ul
                    className="border-2 w-full flex justify-around lg:hidden list-none p-2.5 text-right absolute z-10 bg-white mr-4"
                    onClick={() => setIsHamburger(false)}
                >
                    {renderNavLinks()}
                </ul>
            )}
        </div>
    );
};

export default Header;
