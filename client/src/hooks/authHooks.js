import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useAuthHooks = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated") === "true";
    setAuthenticated(authStatus);
  }, []);

  const login = (email, password) => {
    if (authenticated) {
      toast.error("Already logged in.");
      navigate("/home");
      return;
    }
    if (email === "nissi@gmail.com" && password === "Nissi@interview") {
      localStorage.setItem("authenticated", "true");
      setAuthenticated(true);
      navigate("/home");
      toast.success("Logged in succesfully");
    } else {
      toast.error("Password credentials is incorrect.");
      return;
    }
  };

  const logout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("users");
    setAuthenticated(false);
    navigate("/");
    toast.success("Logged out succesfully");
  };

  return { authenticated, login, logout, showPassword, setShowPassword };
};

export default useAuthHooks;
