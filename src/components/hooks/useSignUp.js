import { useState } from "react";
import { useAuthContext } from "./useAuthHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signUp = async (
    username,
    email,
    password,
    confirmPassword,
    phoneNumber,
    sex,
    status,
    location
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          phoneNumber,
          sex,
          status,
          location,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setLoading(false);
        setError(data.error);
        toast.error(data);
      }
      if (response.ok) {
        toast.success("User Registered Sucessfully");

        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
        dispatch({ type: "LOGIN", payload: data });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { signUp, loading, error };
};
