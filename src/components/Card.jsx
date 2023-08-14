import React from "react";
import { useHospitals } from "./hooks";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const { setHospitalId } = useHospitals();
  const navigate = useNavigate();

  const renderServices = () => {
    if (data.services && data.services.length > 0) {
      if (data.services.length > 3) {
        return data.services.slice(0, 3).map((service, index) => (
          <span key={service._id}>
            {service.name}
            {index < 2 ? ", " : ""}
          </span>
        ));
      } else {
        return data.services.map((service, index) => (
          <span key={service._id}>
            {service.name}
            {index < data.services.length - 1 ? ", " : ""}
          </span>
        ));
      }
    } else {
      return <span>No services available.</span>;
    }
  };

  const handleVisitHospital = (id) => {
    setHospitalId(id);
    localStorage.setItem("visitedHospitalId", id);
    if (!localStorage.getItem("user")) navigate("/register-user");
    else navigate("/hospital");
  };
  return (
    <div className=" bg-white rounded-lg shadow-lg overflow-hidden mt-3">
      <div className="relative">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-full h-48"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-semibold text-white">
            {data.name} Hospital
          </h2>
        </div>
      </div>
      <div className="px-4 py-2 text-gray-700">
        <p>
          <span className=" font-bold">Location</span>: {data.location}
        </p>
        <p>
          <span className=" font-bold">Services</span>: {renderServices()} ...{" "}
        </p>
        <p>
          <span className=" font-bold">Phone Number</span>: {data.phone}
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => handleVisitHospital(data._id)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
