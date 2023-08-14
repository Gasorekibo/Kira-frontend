// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   const handleRegisterUser = () => {
//     navigate("/register-user");
//   };
//   const handleRegisterHospital = () => {
//     navigate("/register-hospital");
//   };

//   return (
//     <div className=" mt-32 flex flex-col md:flex-row text-[#068FFF] bg-white gap-3 p-6 md:h-96 md:mt-32 md:mb-8 ">
//       <div className="flex flex-col flex-1 justify-center px-28 sm:mt-28">
//         <h2 className="text-black font-serif text-2xl md:text-4xl pb-3">
//           About
//         </h2>
//         <p className="text-black font-normal">
//           KiraServices aims to enhance healthcare services in Rwanda. This
//           website provides information about nearby hospitals and medical
//           facilities, enabling patients to compare and choose the most suitable
//           option. It also allow patients to check the availability of medical
//           services and book appointments with healthcare providers.
//         </p>
//         <div className="flex content-between items-center md:flex-row md:mb-20 md:items-start md:mx-auto md:bg-red-500 md:w-full ">
//           <button
//             className="bg-black text-white mt-4 px-6 py-2 rounded-lg md:mx-0 md:p-1"
//             onClick={handleRegisterUser}
//           >
//             Sign Up As Patient
//           </button>
//           <p className="text-bold mx-5"> </p>
//           <button
//             className="bg-black text-white mt-4 px-6 py-2 rounded-lg md:mx-0 md:p-1"
//             onClick={handleRegisterHospital}
//           >
//             Sign Up As Hospital
//           </button>
//         </div>
//       </div>

//       <div className="w-full md:w-[50%] mt-6 pt-8 h-auto">
//         <img
//           className="rounded-lg shadow-md object-cover w-auto h-45 md:h-full object-center mx-auto"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaM7f4RrgmZcsns7mNiKk2xGAKvbhg1U7OQ&usqp=CAU"
//           alt="Doctor"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleRegisterUser = () => {
    navigate("/register-user");
  };
  const handleRegisterHospital = () => {
    navigate("/register-hospital");
  };

  return (
    <div className="mt-20 md:mt-32 flex flex-col md:flex-row text-[#068FFF] bg-white gap-3 p-6">
      <div className="flex flex-col flex-1 justify-center sm:mt-8 md:mt-0 md:px-12 lg:px-24 xl:px-32">
        <h2 className="text-black font-serif text-2xl md:text-4xl pb-3">
          About
        </h2>
        <p className="text-black font-normal">
          KiraServices aims to enhance healthcare services in Rwanda. This
          website provides information about nearby hospitals and medical
          facilities, enabling patients to compare and choose the most suitable
          option. It also allows patients to check the availability of medical
          services and book appointments with healthcare providers.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:mb-8">
          <button
            className="bg-black text-white mt-4 px-6 py-2 rounded-lg md:mx-2"
            onClick={handleRegisterUser}
          >
            Sign Up As Patient
          </button>
          <button
            className="bg-black text-white mt-4 px-6 py-2 rounded-lg md:mx-2"
            onClick={handleRegisterHospital}
          >
            Sign Up As Hospital
          </button>
        </div>
      </div>

      <div className="w-full md:w-[50%] mt-6 md:mt-0">
        <img
          className="rounded-lg shadow-md object-cover w-full h-auto mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaM7f4RrgmZcsns7mNiKk2xGAKvbhg1U7OQ&usqp=CAU"
          alt="Doctor"
        />
      </div>
    </div>
  );
};

export default Header;
