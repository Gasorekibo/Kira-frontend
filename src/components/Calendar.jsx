import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const hospitalId = localStorage.getItem("visitedHospitalId");
  const serviceId = localStorage.getItem("serviceId");
  const userItem = localStorage.getItem("user");
  const userId = userItem ? JSON.parse(userItem)._id : null;
  const [loading, setLoading] = useState(false);
  const [bookedEvents, setBookedEvents] = useState([]);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
  });
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substring(0, 10)
  );

  useEffect(() => {
    if (!hospitalId || !serviceId) navigate("/");
    async function fetchBookedEvents() {
      try {
        const response = await fetch(
          `/api/events/booked-events/${hospitalId}/${serviceId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setBookedEvents(data);
        } else {
          console.error("Error fetching booked events:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching booked events:", error.message);
      }
    }

    fetchBookedEvents();
  }, [selectedDate, serviceId, hospitalId, navigate]);
  const handleChange = (event) => {
    setEventData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userId);

    try {
      const response = await fetch("/api/events/create-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: eventData.title,
          description: eventData.description,
          startTime: eventData.startTime,
          endTime: eventData.endTime,
          hospitalId: hospitalId,
          serviceId: serviceId,
          userId: userId,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setLoading(false);
        toast.error(data.error);
      }
      if (response.ok) {
        toast.success("Event Scheduled Successfully");
        setLoading(false);
        setEventData({
          title: "",
          description: "",
          startTime: "",
          endTime: "",
          bookedHospital: "",
          bookedService: "",
        });
      }
    } catch (error) {
      console.error("Error creating event:", error.message);
    }
  };

  if (loading) {
    <Spinner />;
  }

  const formatDateTime = (isoDateTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(isoDateTime).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <BiArrowBack
        size={30}
        className=" cursor-pointer mt-8 font-bold text-[#4E4FEB]  text-sm"
        onClick={() => window.history.back()}
      />

      <div className="container mx-auto p-4 flex flex-col xl:w-[600px] sm:w-screen md:w-screen">
        <h1 className="text-2xl text-blue-500 font-bold my-9 py-4 mb-6 mx-auto">
          Schedule With Us
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Date:
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border rounded text-blue-500"
          />
        </div>

        <div className="flex flex-wrap w-full mb-4">
          {bookedEvents
            .filter((event) => {
              const eventDate = new Date(event.startTime);
              return eventDate.toISOString().substring(0, 10) === selectedDate;
            })

            .map((event) => (
              <div
                key={event._id}
                className="p-2 border rounded mb-2 bg-[#C51605] text-white flex-col"
              >
                <p className="text-[#FCE22A] pb-2 font-bold ml-[75%] ">
                  Booked
                </p>
                <p>Start Time: {formatDateTime(event.startTime)}</p>
                <p>End Time: {formatDateTime(event.endTime)}</p>
              </div>
            ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Doctor Appointment Request"
              value={eventData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              placeholder="Describe A services You want....."
              value={eventData.description}
              onChange={handleChange}
              className="block text-gray-700 text-sm font-bold mb-2 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Start Time:
            </label>
            <input
              type="datetime-local"
              name="startTime"
              value={eventData.startTime}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              End Time:
            </label>
            <input
              type="datetime-local"
              name="endTime"
              value={eventData.endTime}
              onChange={handleChange}
              className="w-full p-2 border rounded text-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create Event
          </button>
        </form>
      </div>
    </>
  );
};

export default Calendar;
