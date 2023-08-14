import axios from "axios";
import { createContext, useEffect, useState } from "react";

const HospitalDataContext = createContext();

const HospitalDataProvider = ({ children }) => {
  const [data, setData] = useState("");
  const fetchHospitals = async () => {
    try {
      const hospitals = await axios.get("/api/hospitals/find");
      setData(hospitals);
      console.log(hospitals.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <HospitalDataContext.Provider value={{ data, fetchHospitals }}>
      {children}
    </HospitalDataContext.Provider>
  );
};

export { HospitalDataContext, HospitalDataProvider };
