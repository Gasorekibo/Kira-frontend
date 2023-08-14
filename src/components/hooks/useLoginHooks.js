import { useState } from "react";
import { useAuthContext } from "./useAuthHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logIn = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setLoading(false);
        setError(data.error);
        toast.error(data);
      }
      if (response.ok) {
        toast.success("User Login Sucessfully");
        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "LOGIN", payload: data });
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { logIn, loading, error };
};
