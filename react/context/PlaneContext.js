import React, { createContext, useState } from "react";

export const PlaneContext = createContext();

const PlaneProvider = ({ children }) => {
  const [plane, setPlane] = useState({});

  return (
    <PlaneContext.Provider value={{ plane, setPlane }}>
      {children}
    </PlaneContext.Provider>
  );
};

export default PlaneProvider;
