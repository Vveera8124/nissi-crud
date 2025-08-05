import { Routes, Route } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "./protectedRoutes";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login";
import UserList from "../pages/UserList";
import UserProfile from "../pages/UserProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
