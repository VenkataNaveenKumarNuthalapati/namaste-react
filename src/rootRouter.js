import { createBrowserRouter, Outlet, Route } from "react-router-dom";
import App from "./components/App/App";
import Body from "./components/Body/Body";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import ErrorCompo from "./components/ErrorCompo/ErrorCompo";
import Restaurant from "./components/Restaurant/Restaurant";

export const rootRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorCompo />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
                {
                    path: "/restaurant/:resId",
                    element: <Restaurant />,
                },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true, // Opt-in to the v7 startTransition behavior
        },
    }
);
