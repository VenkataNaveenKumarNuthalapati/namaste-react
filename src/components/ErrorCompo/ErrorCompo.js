import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorCompo = () => {
    const err = useRouteError();
    console.log(err);
    const { status, statusText, error } = err;

    return (
        <div>
            <h1>Oops.. Something went wrong</h1>
            <span>{status}</span>
            <span> - {statusText}</span>
            <p>Error Message: {error.message}</p>
        </div>
    );
};

export default ErrorCompo;
