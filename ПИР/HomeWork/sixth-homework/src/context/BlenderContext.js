import { createContext, useContext, useState } from 'react';

const BlenderContext = createContext();

export const useBlender = () => {
  return useContext(BlenderContext);
};

export const BlenderProvider = ({ children }) => {
  const [selectedElements, setSelectedElements] = useState([]);

  const addElement = (element) => {
    setSelectedElements((prev) => [...prev, element]);
  };

  const resetElements = () => {
    setSelectedElements([]);
  };

  return (
    <BlenderContext.Provider value={{ selectedElements, addElement, resetElements }}>
      {children}
    </BlenderContext.Provider>
  );
};
