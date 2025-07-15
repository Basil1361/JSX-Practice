import { useState , useEffect } from "react"
import { useRef } from "react"

const Timer = () => {
    const [count, setCount] = useState(0)
    const interval = useRef(null)

    useEffect(() => {
        interval.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(interval.current)
        }
    } , [])
    
  return (
    <div>
        <h1>Start Timer: {count}</h1>
        <button onClick={() => clearInterval(interval.current)}>Stop</button>
    </div>
  )
}

export default Timer