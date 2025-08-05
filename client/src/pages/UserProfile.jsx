import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUserHooks from "../hooks/userHook";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, addUser, updateUser, deleteUser, loading } = useUserHooks();

  const isNew = id === "new";
  console.log(isNew, id);
  // Initialize form with default values
  const defaultUser = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      city: "",
      state: "",
    },
  };

  // Find existing user or use defaults for new user
  const existingUser = users.find((u) => u.id === parseInt(id));
  const [form, setForm] = useState(existingUser || defaultUser);

  // Update form when existingUser changes (for edit mode)
  useEffect(() => {
    if (!isNew && existingUser) {
      setForm(existingUser);
    }
  }, [existingUser, isNew]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNew) {
      addUser({
        ...form,
        id: Math.max(...users.map((u) => u.id), 0) + 1, // Generate new ID
      });
    } else {
      updateUser(form);
    }
    navigate("/users");
  };

  const handleDelete = () => {
    deleteUser(form.id);
    navigate("/users");
    // toast.success("User details deleted succesfully.");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200">
        <div className="p-8 space-y-5">
          <h2 className="text-2xl font-bold text-blue-700 text-center">
            {isNew ? "Add New User" : "Edit User Profile"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form fields with null checks */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  First Name
                </span>
              </label>
              <input
                type="text"
                name="firstName"
                value={form?.firstName || ""}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Other fields with the same pattern */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                name="lastName"
                value={form?.lastName || ""}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={form?.email || ""}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  Phone
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form?.phone || ""}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">
                  City
                </span>
              </label>
              <input
                type="text"
                name="address.city"
                value={form?.address?.city || ""}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button type="submit" gradient className="flex-1">
                {isNew ? "Add User" : "Update Profile"}
              </Button>

              {!isNew && (
                <button
                  type="button"
                  className="btn flex-1 bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleDelete}
                >
                  Delete User
                </button>
              )}
            </div>
            <div className="text-center">
              <Link
                to="/home"
                className="text-md  font-bold text-gray-400 pt-4"
              >
                Go to home page
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
