import axios from "axios";
const { createContext, useState, useEffect } = require("react");

const HospitalsDataContext = createContext();

const HospitalsDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [hospitalId, setHospitalId] = useState("");
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);

  const fetchHospitals = async () => {
    try {
      const hospitals = await axios.get("https://kira-backend.onrender.com/api/hospitals");
      setData(hospitals.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  return (
    <HospitalsDataContext.Provider
      value={{
        data,
        fetchHospitals,
        searchValue,
        setSearchValue,
        setData,
        filteredData,
        setFilteredData,
        hospitalId,
        setHospitalId,
        scheduledEvents,
        setScheduledEvents,
        showCalendar,
        setShowCalendar,
        serviceId,
        setServiceId,
        showRegistration,
        setShowRegistration,
      }}
    >
      {children}
    </HospitalsDataContext.Provider>
  );
};

export { HospitalsDataContext, HospitalsDataProvider };
