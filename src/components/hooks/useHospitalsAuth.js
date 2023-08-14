import { useContext } from "react";
import { HospitalAuthContext } from "../context/HospitalAuthProvider";

const useHospitalAuth = () => {
  return useContext(HospitalAuthContext);
};

export { useHospitalAuth };
