import { useState } from "react";
import FormInput from "./FormInput";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import { useHospitalHomeProvider } from "./hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HospitalHome = () => {
  const { hospitalInfo } = useHospitalHomeProvider();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionInputChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("/api/services", {
        hospital_id: hospitalInfo._id,
        name,
        description,
      });

      toast.success("Service Created Successfully", { autoClose: 50000 });
      handleReload();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewSchedules = async () => {
    try {
      const schedules = await axios.get(`/api/events/${hospitalInfo._id}`);
      sessionStorage.setItem("schedules", JSON.stringify(schedules.data));
      if (schedules.data.length > 0) {
        navigate("/hospital-home/schedules");
      } else toast.warning("No Service booked");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-1 md:grid-cols-3 h-screen justify-center items-center gap-8 p-4">
        <div
          className={`mt-24 text-black p-4 max-w-5xl shadow-md flex h-[75%] bg-grey rounded justify-center items-center`}
        >
          {hospitalInfo && (
            <div className="block p-2">
              <div className="">
                <img
                  src={hospitalInfo.image}
                  alt={hospitalInfo.name}
                  className="w-full h-auto bg-blue-300 rounded-full md:w-80 md:h-80 object-contain"
                />
                <h1 className="font-bold text-2xl mt-4">{hospitalInfo.name}</h1>
                <p>{hospitalInfo.location}</p>
                <p>Status: {hospitalInfo.status}</p>
                <p>Phone: {hospitalInfo.phone}</p>
                <p>Email: {hospitalInfo.email}</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 md:mt-24 text-black p-4 max-w-5xl shadow-md h-auto md:h-[75%] bg-grey rounded flex justify-center items-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="font-extrabold">SERVICES</h1>
            <div className=" flex gap-4 max-h-[400px] overflow-y-auto flex-col">
              {loading && (
                <div className="flex content-center items-center mt-auto z-10">
                  <Spinner />
                </div>
              )}
              {hospitalInfo.services && hospitalInfo.services.length > 0 ? (
                hospitalInfo.services.map((service) => (
                  <div key={service._id} className=" bg-blue-300 rounded p-4">
                    <h2>
                      <span className=" font-bold">Name:</span> {service.name}
                    </h2>
                    <p>
                      <span className=" font-bold">Description:</span>{" "}
                      {service.description}
                    </p>
                  </div>
                ))
              ) : (
                <h1 className="text-center">No services available</h1>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-24 text-black p-4 max-w-5xl shadow-md h-auto md:h-[75%] bg-grey rounded flex flex-col justify-center items-center">
          <button
            className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700 text-yellow-500 fontbold"
            onClick={handleViewSchedules}
          >
            View Schedules
          </button>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h1 className="p-4 text-2xl font-bold text-center">
              Create a Service
            </h1>
            <label htmlFor="name">Enter Service Name</label>
            <FormInput
              type="text"
              placeholder="Enter the service name here..."
              value={name}
              onChange={nameInputChangeHandler}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              rows="4"
              placeholder="Enter your description"
              value={description}
              onChange={descriptionInputChangeHandler}
              required
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded text-[#F7E987]"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HospitalHome;
