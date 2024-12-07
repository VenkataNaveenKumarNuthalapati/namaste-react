import React from "react";

const Contact = () => {
    return (
        <div className="p-6 bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Contact Us</h1>
            <p className="text-lg text-center mb-6">
                Have questions or feedback? We’d love to hear from you! Reach
                out to us using the form below or through our contact details.
            </p>
            <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
