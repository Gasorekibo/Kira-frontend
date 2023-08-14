import { toast } from "react-toastify";
import { useAuthContext } from "./useAuthHook";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");

    toast.warning("Logout");
    dispatch({ type: "LOGOUT" });
    window.location.href = "/";
  };
  return { logout };
};
