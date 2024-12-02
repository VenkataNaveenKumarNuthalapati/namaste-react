import React, { useState } from "react";

import "./Header.css";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
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
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
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
