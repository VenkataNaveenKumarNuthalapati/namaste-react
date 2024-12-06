import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { rootRouter } from "./rootRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={appStore}>
        <RouterProvider router={rootRouter} />
    </Provider>
);
