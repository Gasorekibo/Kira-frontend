// import { useState } from "react";
// import { useAuthContext } from "./useAuthHook";
// import { toast } from "react-toastify";

// export const useHospitalSignUp = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { dispatch } = useAuthContext();

//   const hospitalSignUp = async (
//     name,
//     email,
//     password,
//     confirmPassword,
//     phone,
//     type,
//     status,
//     location,
//     image,
//     services
//   ) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/api/hospital/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           confirmPassword,
//           phone,
//           type,
//           status,
//           location,
//           image,
//           services,
//         }),
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         setLoading(false);
//         setError(data.error);
//         toast.error(data);
//       }
//       if (response.ok) {
//         toast.success("Hospital Registered Sucessfully");
//         // Store to local storage
//         localStorage.setItem("user", JSON.stringify(data));
//         // update the auth Context.
//         dispatch({ type: "LOGIN", payload: data });
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     return { hospitalSignUp, loading, error };
//   };
// };
