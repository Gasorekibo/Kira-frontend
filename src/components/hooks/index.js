import { useContext } from "react";
import { NotificationContext } from "../context/Notification";
import { HospitalHomeContext } from "../context/HospitalHomeContext";
import { HospitalsDataContext } from "../context/HospitalsDataContext";

const useNotification = () => {
  return useContext(NotificationContext);
};

const useHospitalHomeProvider = () => {
  return useContext(HospitalHomeContext);
};

const useHospitals = () => {
  return useContext(HospitalsDataContext);
};

export { useNotification, useHospitalHomeProvider, useHospitals };
