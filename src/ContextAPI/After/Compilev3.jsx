import { createContext } from "react";
import FirstFilev2 from "../Process/FirstFilev2";

export const Data = createContext();
export const Data1 = createContext();

const Compilev2 = () => {
  const name = "Luthen";
  const age = 22;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <FirstFilev2 />
      </Data1.Provider>
    </Data.Provider>
  );
};

export default Compilev2;
