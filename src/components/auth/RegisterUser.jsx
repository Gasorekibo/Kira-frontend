import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import FormInput from "../FormInput";
import { useSignUp } from "../hooks/useSignUp";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const RegisterUser = () => {
  const navigate = useNavigate();
  const { signUp, error, loading } = useSignUp();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    sex: "",

    location: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const {
    username,
    email,
    password,
    confirmPassword,
    phoneNumber,
    sex,

    location,

    type,
  } = formData;

  const handleChange = (e) => {
    if (type === "file") {
      console.log(e.target.files[0]);
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp(
      username,
      email,
      password,
      confirmPassword,
      phoneNumber,
      sex,

      location
    );
  };
  if (error) {
    toast.error(error);
  }

  const handleNavigate = () => {
    navigate("/login-user");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-16">
        <div className="max-w-md p-6 bg-white rounded shadow-md w-full">
          <h1 className="w-full text-2xl font-bold text-[#068FFF] mb-6 pl-14 items-center">
            Register Kira Services
          </h1>
          {loading && (
            <div className="flex content-center items-center z-20  h-full py-[50%] ">
              <Spinner />
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <FormInput
              name="username"
              type="text"
              placeholder="Enter your username"
              label="Username"
              value={username}
              onChange={handleChange}
              required
            />
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

            <FormInput
              name="confirmPassword"
              placeholder="******"
              label="ConfirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              type={showConfirmPassword ? "text" : "password"}
              showIcon={true}
              icon={
                showConfirmPassword ? (
                  <BiSolidHide
                    size={20}
                    onClick={handleShowConfirmPassword}
                    className="text-gray-400 cursor-pointer"
                  />
                ) : (
                  <BiSolidShow
                    size={20}
                    onClick={handleShowConfirmPassword}
                    className="text-gray-400 cursor-pointer"
                  />
                )
              }
            />
            <FormInput
              name="phoneNumber"
              placeholder="+250 78......"
              type="phoneNumber"
              label="Phone Number"
              value={phoneNumber}
              onChange={handleChange}
            />
            <FormInput
              name="location"
              placeholder="ex: Kigali-Gasabo-Remera"
              type="text"
              label="Location"
              value={location}
              onChange={handleChange}
            />

            <FormInput
              name="sex"
              placeholder="Male"
              type="text"
              label="Sex"
              value={sex}
              onChange={handleChange}
            />

            <div className="flex items-center justify-between mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <p
                className="flex text-blue-500 font-bold cursor-pointer "
                onClick={handleNavigate}
              >
                Have Account ? Login
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterUser;
