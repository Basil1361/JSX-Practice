import { useState } from "react";

function Number () {
    const [random, setRandom] = useState(Math.floor(Math.random()*100))
    const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '3px'}


const NewNumber = () => {
    const value = Math.floor(Math.random()*100)
    setRandom(value) 

}
  return (
    <div>
    <h1> Random Number = {random}</h1>
    <button style = {styles} onClick={NewNumber}>
        Generate New Number
    </button>
    </div>
  )
}

export default Number