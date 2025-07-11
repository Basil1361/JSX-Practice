import { Data , Data1 } from "../After/Compilev3"
import { useContext } from "react"

const ThirdFilev3 = () => {
  const username = useContext(Data)
  const age = useContext(Data1)

  return(
    <p>
        My name is {username} and I'm {age} years old
    </p>
  )
}

export default ThirdFilev3