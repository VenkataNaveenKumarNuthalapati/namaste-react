import React from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "./src/components/App/App";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
