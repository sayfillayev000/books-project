import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthRoutes;
