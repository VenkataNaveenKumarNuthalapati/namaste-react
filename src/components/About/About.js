import React from "react";

const About = () => {
    return (
        <div className=" p-6 bg-gray-100 text-gray-800 h-[84vh]">
            <h1 className="text-3xl font-bold text-center mb-4 text-red-600">
                Welcome to Foodie Haven
            </h1>
            <p className="text-lg text-center mb-6">
                At <span className="font-semibold">Foodie Haven</span>, we
                believe that good food brings joy and connects people. Our
                mission is to deliver your favorite meals from the best local
                restaurants right to your doorstep.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-red-500">
                What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <span className="font-semibold">
                        Wide Variety of Cuisines:
                    </span>{" "}
                    Explore flavors from all around the world.
                </li>
                <li>
                    <span className="font-semibold">Seamless Ordering:</span>{" "}
                    Easily browse, order, and track your meals.
                </li>
                <li>
                    <span className="font-semibold">Fast Delivery:</span> Get
                    your food delivered fresh and on time.
                </li>
                <li>
                    <span className="font-semibold">
                        Customer Satisfaction:
                    </span>{" "}
                    Our priority is to provide you with the best service and
                    experience.
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-red-500">
                Our Mission
            </h2>
            <p className="text-lg">
                To make food delivery simple, fast, and delightful, so you can
                focus on enjoying every bite.
            </p>
            <p className="mt-6 text-center text-lg">
                Join us on this delicious journey and let{" "}
                <span className="font-semibold">Foodie Haven</span> make every
                meal a special one!
            </p>
        </div>
    );
};

export default About;
