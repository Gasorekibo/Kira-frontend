import { createContext, useState } from "react";

const UsersDataContext = createContext();

const UsersDataProvider = ({ children }) => {
  const [data, setData] = useState("");
  return (
    <UsersDataContext.Provider value={{ data, setData }}>
      {children}
    </UsersDataContext.Provider>
  );
};

export { UsersDataProvider, UsersDataContext };
