import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Body from "../Body/Body";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import ErrorCompo from "../ErrorCompo/ErrorCompo";
import Restaurant from "../Restaurant/Restaurant";

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export const appRouter = createBrowserRouter(
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

export default App;
