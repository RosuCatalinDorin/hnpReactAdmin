import React, { useContext } from "react";
import {Navigate, Routes} from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    debugger;
    const {currentUser} = useContext(AuthContext);

    return (
        !!currentUser ? (
            {RouteComponent}
        ) : (<Navigate to={"/login"}/>)
    );
};


export default PrivateRoute