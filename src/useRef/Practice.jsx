import { useRef } from "react"

const Practice = () => {
    const Newval = useRef('Hello')
    console.log(Newval)
function FocusMe () {
    Newval.current.focus()
    Newval.current.value = null
}
  return (
    <div>
        <input placeholder="Type Something" type="text" ref={Newval}></input>
        <button onClick={FocusMe}>Focus me</button> 
    </div>
  )
}

export default Practice


