import {useState} from "react"

const Counter = () => {
// Destructuring here
    const [count, setCount] = useState(0)
// function of increment and decrement
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
// Assigning style
    const styles = { width: "20px", height: "20px", textAlign: "center", padding: 0}

// if apple, setApple -> A must be capital

  return (
    <section>
    <p>{count}</p>
    <button style={styles} onClick={increment}>+</button>
    <button style={styles} onClick={decrement}>-</button>
    </section>
  )
}

export default Counter