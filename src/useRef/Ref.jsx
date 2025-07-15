import { useRef } from "react";

const Ref = () => {
    const input = useRef(null)
    console.log(input)
const FocusMe = () => {
    input.current.focus()
    input.current.value = "Haio"
}
  return (
    <div>
        <input type="text" ref = {input}></input>
        <button onClick={() => FocusMe()}>Focus here</button>
    </div>
  )
}

export default Ref