import { useNavigate } from "react-router-dom";
import { useHospitals } from "./hooks";
import Navbar from "./Navbar";

const HospitalPage = () => {
  const navigate = useNavigate();
  const { data, setServiceId } = useHospitals();
  const hospitalId = localStorage.getItem("visitedHospitalId");
  const hospital = data.filter((hospital) => hospital._id === hospitalId)[0];
  console.log(hospital.services);

  if (!hospitalId) navigate("/");

  if (!hospital) {
    navigate("/");
    return;
  }

  const handleBookNow = (serviceId) => {
    setServiceId(serviceId);
    localStorage.setItem("serviceId", serviceId);
    navigate("/booking-calendar");
    console.log(hospital);
  };

  console.log(hospital);
  console.log(hospital.status);

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-1 md:grid-cols-2 h-screen justify-center items-center gap-4 md:gap-8 p-4">
        <div className=" mt-20 md:mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          <div className=" block p-2">
            <div className="">
              <img
                src={hospital.image}
                alt={hospital.name}
                className=" w-80 h-80 bg-blue-300 rounded-full object-cover"
              />
              <h1 className=" font-bold text-2xl">{hospital.name}</h1>
              <p>{hospital.location}</p>
              <p>Status: {hospital.status}</p>
              <p>Phone: {hospital.phone}</p>
              <p>Email: {hospital.email}</p>
            </div>
          </div>
        </div>

        <div className=" mt-0 md:mt-24 text-black p-4 max-w-5xl shadow-md h-[75%] bg-grey rounded flex justify-center items-center">
          <div className=" flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h1 className="font-extrabold">SERVICES</h1>
              <div className=" flex gap-4 max-h-[400px] overflow-y-auto flex-col">
                {hospital.services && hospital.services.length > 0 ? (
                  hospital.services.map((service) => (
                    <div key={service._id} className=" bg-blue-300 rounded p-4">
                      <h2>
                        <span className=" font-bold">Name:</span> {service.name}
                      </h2>
                      <p>
                        <span className=" font-bold">Description:</span>{" "}
                        {service.description}
                      </p>
                      <span
                        className=" cursor-pointer mt-2 font-bold text-[#4E4FEB] float-right text-sm"
                        onClick={() => handleBookNow(service._id)}
                      >
                        Book Now
                      </span>
                    </div>
                  ))
                ) : (
                  <h1 className="text-center">No services available</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// =========
export default HospitalPage;
