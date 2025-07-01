// storing information


import { useState , useEffect} from "react"

const Third = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : ""
    })
    const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '3px'}
    
const change = (event) => {
    setName(event.target.value)
}

useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
}, [name])

const click = () => setName("")

    
  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input type="text" value = {name} onChange={change} placeholder = "Enter your name:"></input>
        <button style = {styles} onClick = {click}> New Name</button>
    </div>
  )
}

export default Third



