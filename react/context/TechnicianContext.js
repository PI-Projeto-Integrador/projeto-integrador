import React, { createContext, useState } from "react";

export const TechnicianContext = createContext();

const TechnicianProvider = ({ children }) => {
  const [technician, setTechnician] = useState({});

  return (
    <TechnicianContext.Provider value={{ technician, setTechnician }}>
      {children}
    </TechnicianContext.Provider>
  );
};

export default TechnicianProvider;
