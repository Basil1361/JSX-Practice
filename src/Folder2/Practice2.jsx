

import { useState } from "react"

const Practice2 = () => {
const Task = [
    {id : 1, todo : "study", time : "8:15"},
    {id : 2, todo : "bath", time : "10:45"},
    {id : 3, todo : "read", time :"11:00"}
]
const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '3px'}
const [value, setValue] = useState(Task)
const sleep = () => {
    setValue(prev => [...prev,
        {id : 4, todo : "sleep", time : "11:45"}
     ])
}
return(
    <div> 
        <p>
            {value.map(m => (
                <ul key={m.id}>
                    <li>Todo: {m.todo}</li>
                    <li>Time: {m.time}</li>
                </ul>

            ))}
        </p>

        <button style = {styles} onClick={sleep}>
            Add Sleep
        </button>
    </div>
  )
}

export default Practice2

