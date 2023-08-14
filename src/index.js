import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./components/context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HospitalAuthProvider } from "./components/context/HospitalAuthProvider";
import { HospitalHomeProvider } from "./components/context/HospitalHomeContext";
import { HospitalsDataProvider } from "./components/context/HospitalsDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <HospitalAuthProvider>
          <HospitalHomeProvider>
            <HospitalsDataProvider>
              <App />
            </HospitalsDataProvider>
          </HospitalHomeProvider>
        </HospitalAuthProvider>
      </AuthContextProvider>
    </Router>
    <ToastContainer />
  </React.StrictMode>
);
