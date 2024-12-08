import React from "react";
import logo3 from "../../../public/images/logo3.png";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6 lg:flex justify-between items-center p-4 sticky bottom-[-80px]">
            <div className="flex justify-center items-end space-x-4">
                <img
                    className="h-10 w-10 object-contain"
                    src={logo3}
                    alt="Foodie Haven Logo"
                />
                <h1 className="text-xl font-bold text-white">Foodie Haven</h1>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-4">
                <p className="text-sm mr-3">
                    © {new Date().getFullYear()} Foodie Haven. All rights
                    reserved.
                </p>
                <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition"
                    aria-label="Facebook"
                >
                    Facebook
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition"
                    aria-label="Twitter"
                >
                    Twitter
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-gray-100 transition"
                    aria-label="Instagram"
                >
                    Instagram
                </a>
            </div>
            <p className="text-xs text-center mt-4">
                Crafted with ❤️ by Foodie Haven Team.
            </p>
            {/* <div className="w-6/12 container mx-auto text-center"></div> */}
        </footer>
    );
};

export default Footer;
