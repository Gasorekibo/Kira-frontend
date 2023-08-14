// import React, { useState } from "react";
// import { useHospitals } from "./hooks";
// import { toast } from "react-toastify";
// import { BiShowAlt,BiSolidHide } from "react-icons/bi";

// const VerifyHospitalRegistration = () => {
//   const [value, setValue] = useState("");
//   const { setShowRegistration } = useHospitals();

//   const handleVerifyRegistration = (e) => {
//     e.preventDefault();
//     if (value && value === "KiraServices") {
//       setShowRegistration(true);
//       setValue("");
//       toast.success("Verified");
//     } else {
//       toast.error("Enter a Correct Token");
//       setValue("");
//     }
//   };

//   return (
//     <div className="flex pl-3 items-center justify-center max-h-screen bg-gray-100">
//       <div className=" px-4 bg-white rounded-lg shadow-md w-50 my-20 ">
//         <h1 className="text-xl font-semibold mb-2 text-blue-500">
//           Enter Token
//         </h1>
//         <form onSubmit={handleVerifyRegistration}>
//           <input
//             type="password"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black font-semibold"
//             placeholder="Enter Registra code..."
//             <BiShowAlt />
//           />
//           <button
//             type="submit"
//             className="mt-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none float-right"
//           >
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyHospitalRegistration;

import React, { useState } from "react";
import { useHospitals } from "./hooks";
import { toast } from "react-toastify";
import { BiShowAlt, BiHide } from "react-icons/bi";

const VerifyHospitalRegistration = () => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const { setShowRegistration } = useHospitals();

  const handleVerifyRegistration = (e) => {
    e.preventDefault();
    if (value && value === "KiraServices") {
      setShowRegistration(true);
      setValue("");
      toast.success("Verified");
    } else {
      toast.error("Enter a Correct Token");
    }
  };

  return (
    <div className="flex pl-3 items-center justify-center max-h-screen bg-gray-100">
      <div className=" px-4 bg-white rounded-lg shadow-md w-50 my-20">
        <h1 className="text-xl font-semibold mb-2 text-blue-500">
          Enter Token
        </h1>
        <form onSubmit={handleVerifyRegistration}>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black font-semibold"
              placeholder="Enter Registration code..."
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none "
            >
              {showPassword ? (
                <BiHide className=" fill-black" size={20} />
              ) : (
                <BiShowAlt className=" fill-black" size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="mt-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none float-right"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyHospitalRegistration;
