// import React, { useState, useEffect } from "react";
// import { useLogout } from "../components/hooks/useLogoutHook";
// import { Link } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
// import { useAuthContext } from "./hooks/useAuthHook";
// import { handleSearch } from "../utils/helpers";
// import { useHospitals } from "./hooks";

// const Navbar = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [nav, setNav] = useState(false);
//   const { logout } = useLogout();
//   const { user } = useAuthContext();
//   const { data, searchValue, setSearchValue, setFilteredData } = useHospitals();

//   useEffect(() => {
//     if (window.location.pathname === "/") {
//       setShowSearch(true);
//     }
//   }, []);

//   const handleNav = () => {
//     setNav(!nav);
//   };
//   const handleLogout = () => {
//     logout();
//     window.location.reload();
//   };

//   const handleSearchClick = () => {
//     setFilteredData(handleSearch(data, searchValue));
//   };

//   const handleSearchValueChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   return (
//     <div className=" flex justify-between items-center h-24 bg-[#000300] mx-auto px-4 text-white py-2 fixed top-0 left-0 right-0 z-10 w-full">
//       <div className="flex items-center justify-center">
//         <h1 className="text-3xl font-bold text-[#068FFF]">
//           <Link to="/">Kira Services</Link>
//         </h1>
//         {showSearch && (
//           <div className="ml-4 flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchValue}
//               className="border border-white mr-2 px-2 py-1 rounded-lg focus:outline-none focus:shadow-outline text-blue-600"
//               onChange={handleSearchValueChange}
//             />
//             <button>
//               <AiOutlineSearch size={25} onClick={handleSearchClick} />
//             </button>
//           </div>
//         )}
//       </div>
//       {!user ? (
//         <div className="hidden md:flex items-center space-x-4 mr-36">
//           <Link to="/" className="p-4">
//             Home
//           </Link>
//           <Link to="/register-user" className="p-4">
//             Register
//           </Link>
//         </div>
//       ) : (
//         <div className="mr-36">
//           <Link to="/" className="p-4">
//             Home
//           </Link>
//           <Link to="/logout" className="p-4" onClick={handleLogout}>
//             Logout
//           </Link>
//         </div>
//       )}

//       <div className="md:hidden flex items-center">
//         <button onClick={handleNav}>
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </button>
//       </div>

//       <ul
//         className={
//           nav
//             ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
//             : "ease-in-out duration-500 fixed left-[-100%]"
//         }
//       >
//         <h1 className="w-full text-3xl font-bold text-[#068FFF] m-4">
//           Kira Services
//         </h1>

//         <div className="  h-full flex flex-col  ">
//           {!user ? (
//             <>
//               <Link
//                 to="/"
//                 className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/register-user"
//                 className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
//               >
//                 Register
//               </Link>

//               <Link
//                 to="/login-user"
//                 className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
//               >
//                 Login
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/"
//                 className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/logout"
//                 className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
//               >
//                 Logout
//               </Link>
//             </>
//           )}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { useLogout } from "../components/hooks/useLogoutHook";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useAuthContext } from "./hooks/useAuthHook";
import { handleSearch } from "../utils/helpers";
import { useHospitals } from "./hooks";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { data, searchValue, setSearchValue, setFilteredData } = useHospitals();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setShowSearch(true);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleLogout = () => {
    logout();
  };

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setFilteredData(handleSearch(data, searchValue));
    }
  };

  const handleSearchClick = () => {
    setFilteredData(handleSearch(data, searchValue));
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex justify-between items-center h-24 bg-[#000300] mx-auto px-4 text-white py-2 fixed top-0 left-0 right-0 z-10 w-full">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#068FFF]">
          <Link to="/">Kira Services</Link>
        </h1>
        {showSearch && (
          <div className="ml-4 flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              className="border border-white mr-2 px-2 py-1 rounded-lg focus:outline-none focus:shadow-outline text-blue-600"
              onChange={handleSearchValueChange}
              onKeyDown={handleSearchInputKeyDown}
            />
            <button>
              <AiOutlineSearch size={25} onClick={handleSearchClick} />
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center space-x-4 mr-36">
        {!nav && (
          <>
            <Link to="/" className="p-4">
              Home
            </Link>
            {user ? (
              <Link to="/" className="p-4" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/register-user" className="p-4">
                Register
              </Link>
            )}
          </>
        )}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#068FFF] m-4">
          Kira Services
        </h1>
        <div className="h-full flex flex-col">
          <Link
            to="/"
            className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
          >
            Home
          </Link>
          {!user && (
            <>
              <Link
                to="/register-user"
                className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
              >
                Register
              </Link>
              <Link
                to="/login-user"
                className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
              >
                Login
              </Link>
            </>
          )}
          {user && (
            <Link
              onClick={handleLogout}
              to="/"
              className="p-4 border-b border-gray-600 rounded-sm hover:font-bold hover:text-2xl w-full px-4"
            >
              Logout
            </Link>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
