import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useUserHooks = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial data
    const loadUsers = async () => {
      try {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
          setUsers(JSON.parse(storedUsers));
        } else {
          // Fetch from dummyjson if no local data
          const response = await fetch("https://dummyjson.com/users?limit=20");
          const data = await response.json();
          setUsers(data.users);
          localStorage.setItem("users", JSON.stringify(data.users));
        }
      } catch (error) {
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const getUsers = () => {
    const userData = localStorage.getItem("users");
    setUsers(JSON.parse(userData));
  };

  const saveUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const addUser = (newUser) => {
    const lastId = users.sort((a, b) => b.id - a.id)[0]?.id;
    const updatedUsers = [...users, { ...newUser, id: lastId + 1 }];
    saveUsers(updatedUsers);
    toast.success("User added successfully");
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    saveUsers(updatedUsers);
    toast.success("User updated successfully");
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    saveUsers(updatedUsers);
    toast.success("User deleted successfully");
  };

  return {
    users,
    loading,
    addUser,
    updateUser,
    deleteUser,
    getUsers,
  };
};

export default useUserHooks;
