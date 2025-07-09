import {createContext } from "react"
import FirstFilev2 from "./FirstFilev2"

export const Data = createContext()

const Compilev2 = () => {
    const name = "Luthen"
  return (
    <Data.Provider value = {name}>
        <FirstFilev2/>
    </Data.Provider>
  )
}

export default Compilev2