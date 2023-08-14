// const ViewBookedEvents = () => {
//   const scheduledEventsJSON = sessionStorage.getItem("schedules");
//   const scheduledEvents = JSON.parse(scheduledEventsJSON) || [];

//   console.log(scheduledEvents);
//   const handleBackToHospital = () => {
//     window.history.back();
//   };

//   return (
//     <>
//       {scheduledEvents.length > 0 && (
//         <div className=" flex flex-col relative items-center justify-center h-screen">
//           <button
//             className=" bg-[#495057] absolute left-32 top-2 text-white rounded font-bold px-2 py-1 shadow-md hover:bg-[#adb5bd] transition duration-300"
//             onClick={handleBackToHospital}
//           >
//             Back to hospital
//           </button>
//           <div className=" p-4 shadow-md shadow-slate-400">
//             <div className=" grid grid-cols-3 mx-auto justify-center items-center gap-4">
//               {scheduledEvents.map((schedule) => (
//                 <div
//                   key={schedule._id}
//                   className=" bg-blue-600 font-bold rounded py-2 px-4 shadow-sm "
//                 >
//                   <h1 className=" border-b-gray-400 border-b-2">
//                     <span className=" text-black">bookedService:</span>
//                     {schedule.bookedService ? schedule.bookedService.name : ""}
//                   </h1>
//                   <p className=" border-b-gray-400 border-b-2">
//                     <span className=" text-black">Title:</span> {schedule.title}
//                   </p>
//                   <p className=" border-b-gray-400 border-b-2">
//                     <span className=" text-black">startTime:</span>{" "}
//                     {schedule.startTime}
//                   </p>
//                   <p className=" border-b-gray-400 border-b-2">
//                     <span className=" text-black">endTime:</span>{" "}
//                     {schedule.endTime}
//                   </p>
//                   <p className="">
//                     <span className=" text-black">Description:</span>{" "}
//                     {schedule.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ViewBookedEvents;

import React from "react";

const ViewBookedEvents = () => {
  const scheduledEventsJSON = sessionStorage.getItem("schedules");
  const scheduledEvents = JSON.parse(scheduledEventsJSON) || [];

  console.log(scheduledEvents);
  const handleBackToHospital = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col h-screen">
      {scheduledEvents.length > 0 && (
        <>
          <button
            className="bg-[#495057] sticky z-20 top-0 text-white rounded font-bold px-2 py-1 shadow-md hover:bg-[#adb5bd] transition duration-300"
            onClick={handleBackToHospital}
          >
            Back to hospital
          </button>
          <div className="flex-grow p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {scheduledEvents.map((schedule) => (
                <div
                  key={schedule._id}
                  className="bg-blue-600 font-bold rounded py-2 px-4 shadow-sm"
                >
                  <h1 className="border-b-gray-400 border-b-2">
                    <span className="text-black">bookedService:</span>{" "}
                    {schedule.bookedService ? schedule.bookedService.name : ""}
                  </h1>
                  <p className="border-b-gray-400 border-b-2">
                    <span className="text-black">Title:</span> {schedule.title}
                  </p>
                  <p className="border-b-gray-400 border-b-2">
                    <span className="text-black">startTime:</span>{" "}
                    {schedule.startTime}
                  </p>
                  <p className="border-b-gray-400 border-b-2">
                    <span className="text-black">endTime:</span>{" "}
                    {schedule.endTime}
                  </p>
                  <p className="border-b-gray-400 border-b-2">
                    <span className="text-black">Description:</span>{" "}
                    {schedule.description}
                  </p>
                  <p className="border-b-gray-400 border-b-2">
                    <span className=" text-black">Patient's Name: </span>
                    {schedule.patient.username}
                  </p>
                  <p>
                    <span className=" text-black">Patient's Email: </span>
                    {schedule.patient.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewBookedEvents;
