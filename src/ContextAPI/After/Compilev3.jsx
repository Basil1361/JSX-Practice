import { createContext } from "react";
import FirstFilev3 from "./FirstFilev3";

export const Data = createContext();
export const Data1 = createContext();

const Compilev3 = () => {
  const name = "Owl";
  const age = 50;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <FirstFilev3/>
      </Data1.Provider>
    </Data.Provider>
  );
};

export default Compilev3;
