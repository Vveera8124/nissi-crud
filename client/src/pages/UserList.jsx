import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUserHooks from "../hooks/userHook";
const UserList = () => {
  const { loading, users } = useUserHooks();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div className="alert alert-error max-w-md mx-auto mt-8">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="stroke-current shrink-0 h-6 w-6"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  //         />
  //       </svg>
  //       <span>Error loading users: {error}</span>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          {/* Header */}

          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 flex flex-row justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">User Directory</h2>
              <p className="text-blue-100">Display-data</p>
            </div>{" "}
            <Link to="/home" className="text-md font-bold text-white mt-2">
              Go to home page
            </Link>
          </div>
          {/* Mobile Cards (show on small screens) */}
          <div className="md:hidden p-4 space-y-4">
            {users
              .sort((a, b) => b.id - a.id)
              .map((user) => (
                <div
                  key={user.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full">
                        <img
                          src={
                            user.image ||
                            "https://res.cloudinary.com/dzjxxlarr/image/upload/v1725365923/customerDefault_ivzidn.png"
                          }
                          alt={user.firstName}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {user.firstName} {user.lastName}
                      </h3>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <p className="text-gray-500">Phone</p>
                      <p>{user.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">City</p>
                      <p>{user.address.city}</p>
                    </div>
                  </div>

                  <Link
                    to={`/users/${user.id}`}
                    className="btn btn-sm btn-block bg-blue-600 hover:bg-blue-700 border-none text-white"
                  >
                    Edit Profile
                  </Link>
                </div>
              ))}
          </div>

          {/* Desktop Table (hidden on mobile) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6">User</th>
                  <th className="text-left py-4 px-6">Contact</th>
                  <th className="text-left py-4 px-6">Location</th>
                  <th className="text-right py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .sort((a, b) => b.id - a.id)
                  .map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                              <img
                                src={
                                  user.image ||
                                  "https://res.cloudinary.com/dzjxxlarr/image/upload/v1725365923/customerDefault_ivzidn.png"
                                }
                                alt={user.firstName}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {user.firstName} {user.lastName}
                            </h3>
                            {/* <p className="text-sm text-gray-500">
                            @{user.username}
                          </p> */}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-800">{user.email}</p>
                        <p className="text-sm text-gray-500">{user.phone}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-800">{user.address.city}</p>
                        {/* <p className="text-sm text-gray-500">
                        {user.address.state}
                      </p> */}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          to={`/users/${user.id}`}
                          className="btn btn-sm bg-blue-600 hover:bg-blue-700 border-none text-white"
                        >
                          Edit Profile
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Pagination (optional) */}
          {/* <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-gray-50">
            <button className="btn btn-sm btn-ghost" disabled>
              Previous
            </button>
            <span className="text-sm text-gray-600">Page 1 of 1</span>
            <button className="btn btn-sm btn-ghost" disabled>
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserList;
