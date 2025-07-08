import { useState, useEffect } from "react"

const Change = () => {
const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '3px'}
const [plus , setPlus] = useState(0)
const add = () => {setPlus(plus + 1)}


useEffect(() => {
    if (plus > 0)
    {
        console.log("useEffect")
        document.title = `Increment ${plus}`
    }
    else null
}, [plus])

  return (
    <div>
        <p>Plus: {plus}</p>
        <button style = {styles} onClick = {add}> Add </button>
    </div>
  )
}

export default Change