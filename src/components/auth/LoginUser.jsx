import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FormInput from "../FormInput";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLoginHooks";

import Spinner from "../Spinner";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const LoginUser = () => {
  const { logIn, error, loading } = useLogin();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const { email, password } = formData;

  const handleNavigate = () => {
    navigate("/register-user");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(email, password);
    if (error) {
      toast.error(error);
    }
    if (loading) {
      return (
        <div className="flex content-center items-center mt-80">
          <Spinner />
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center flex-col pt-48">
        <div className="max-w-md p-6 bg-white rounded shadow-md w-full">
          <h1 className="w-full text-3xl font-bold text-[#068FFF] mb-7 items-center">
            Login Kira Services
          </h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              placeholder="gasore@gmail.com"
              label="Email"
              value={email}
              onChange={handleChange}
              required
            />
            <FormInput
              name="password"
              placeholder="******"
              label="Password"
              value={password}
              onChange={handleChange}
              required
              type={showPassword ? "text" : "password"}
              showIcon={true}
              icon={
                showPassword ? (
                  <BiSolidHide
                    size={20}
                    onClick={handleShowPassword}
                    className="text-gray-400 cursor-pointer"
                  />
                ) : (
                  <BiSolidShow
                    size={20}
                    onClick={handleShowPassword}
                    className="text-gray-400 cursor-pointer"
                  />
                )
              }
            />

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <p
                className="flex text-blue-500 font-bold cursor-pointer "
                onClick={handleNavigate}
              >
                Don't have Account? Register
              </p>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default LoginUser;
