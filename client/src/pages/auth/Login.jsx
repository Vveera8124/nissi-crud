import React, { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import useAuthHooks from "../../hooks/authHooks";

const Login = () => {
  const { login, showPassword, setShowPassword } = useAuthHooks();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <h2 className="text-3xl font-bold text-blue-700 text-center mt-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            label="Email"
            required
          />

          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            label="Password"
            required
          />

          {/* <div className="label">
            <a
              href="#"
              className="label-text-alt link link-hover text-blue-600"
            >
              Forgot password?
            </a>
          </div> */}

          <Button type="submit" gradient>
            Sign In
          </Button>

          <p className="text-right text-gray-400 text-sm">
            By Veera Chinna Perumal
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
