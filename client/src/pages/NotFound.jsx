// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center">
        <div className="mb-6 text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <Link to="/home" className="block">
            <Button className="w-full" gradient>
              Go to Homepage
            </Button>
          </Link>
          <Link to="/" className="block">
            <Button className="w-full" variant="outline">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
