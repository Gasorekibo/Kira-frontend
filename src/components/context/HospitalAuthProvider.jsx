import { createContext } from "react";

const HospitalAuthContext = createContext();

const HospitalAuthProvider = ({ children }) => {
  const changeHospitalToken = (value) => {
    localStorage.setItem("hospitalToken", value);
  };

  return (
    <HospitalAuthContext.Provider value={{ changeHospitalToken }}>
      {children}
    </HospitalAuthContext.Provider>
  );
};

export { HospitalAuthContext, HospitalAuthProvider };
