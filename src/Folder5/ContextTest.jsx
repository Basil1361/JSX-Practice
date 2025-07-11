import { createContext } from "react";
import { useState } from "react";

export const Contextinfo = createContext();

const ContextTest = ({ children }) => {
  const [info, setInfo] = useState({ name: "John", age: 17 });
  const newInfo = newName => setInfo({ name: newName, age: info.age });

  return (
    <Contextinfo.Provider value={{ info, newInfo }}>
      {children}
    </Contextinfo.Provider>
  );
};

export default ContextTest;
