import { useState } from "react"

const Practice1 = () => {
const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '3px'}
const [value, setValue] = useState(0)
const increment = () => setValue(value + 1)
const decrement = () => setValue(value - 1)
  return (
    
    <div>
        You Clicked {value} times. 
        <br></br>
        <button style = {styles} onClick={increment}>
            Increase Number
        </button>
        <button style = {styles} onClick={decrement}>
            Decrease Number
        </button>
    </div>
  )
}

export default Practice1