import { Navigate, Outlet } from "react-router-dom";
// import useAuthHooks from "../hooks/authHooks";

export const ProtectedRoute = () => {
  // const { authenticated } = useAuthHooks();
  const isAuth = localStorage.getItem("authenticated") === "true";

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export const AuthRoute = ({ redirectPath = "/home" }) => {
  const isAuth = localStorage.getItem("authenticated") === "true";
  return !isAuth ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
