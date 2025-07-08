import { useState, useEffect } from "react"


const BasicEffect = () => {
const initial = 10
const [value, setValue]= useState(initial)

useEffect(() => {
    if (value > 10) {
        console.log("Changed", value - initial, "times")
        document.title = `Increment ${value - initial}`
        console.log(document.title)
    }
    }, [value]);

  return (
    <div>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  )
}

export default BasicEffect