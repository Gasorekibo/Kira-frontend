import { createContext, useState } from "react";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");

  let timeoutId;
  const updateNotification = (type, value) => {
    console.log(`Error: ${value}`);
    if (timeoutId) clearTimeout(timeoutId);
    switch (type) {
      case "error":
        setClasses("bg-red-500");
        break;
      case "success":
        setClasses("bg-green-500");
        break;
      case "warning":
        setClasses("bg-yellow-500");
        break;
      default:
        setClasses("bg-red-500");
    }

    timeoutId = setNotification(value);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };
  return (
    <NotificationContext.Provider value={{ updateNotification }}>
      {children}
      {notification && (
        <div className=" fixed left-1/2 -translate-x-1/2 top-24">
          <div className={classes + " shadow-md shadow-grey-400 rounded"}>
            <p className=" text-white font-semibold py-2 px-4">
              {notification}
            </p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
