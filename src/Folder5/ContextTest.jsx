import { createContext } from "react";
import { useState } from "react";

export const NameData = createContext()
export const AgeData = createContext()

const ContextTest = ({ children }) => {
  const [name, setName] = useState({ name: "John"})
  const [age, setAge] = useState({ age: 17 })

const updateName = (newName) => setName({ name: newName })
const updateAge = (newAge) => setAge({ age: newAge })

  return (
    <NameData.Provider value = {{name, updateName}}>
      <AgeData.Provider value = {{age, updateAge}}>
        {children}
      </AgeData.Provider>
    </NameData.Provider>
  )
}

export default ContextTest