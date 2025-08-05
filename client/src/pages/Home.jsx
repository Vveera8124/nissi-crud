import React from "react";
import { Link } from "react-router-dom";
import useAuthHooks from "../hooks/authHooks";

const Home = () => {
  const { logout } = useAuthHooks();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Welcome to Dashboard (Interview Task)
        </h1>
        <div className="space-y-4">
          <Link
            to="/users"
            className="btn btn-primary btn-lg block w-64 mx-auto"
          >
            View User Data
          </Link>
          <Link
            to="/users/new"
            className="btn btn-secondary btn-lg block w-64 mx-auto"
          >
            Add New Users
          </Link>
          <button
            className="btn btn-info btn-lg block w-64 mx-auto"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
