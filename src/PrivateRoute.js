import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./Auth";

export const ProtectedRoute = ({
                            redirectPath = '/login',
                            children,
                        }) => {
    const {currentUser} = useAuth();
    debugger;

    if (!currentUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};