// subject useState

import {useState} from "react"

const Counter2 = () => {
// Destructuring here, [] to deconstruct
    const [friends, setFriends] = useState(['Alex', 'Barron', 'Cattie', 'Donk'])
    const increase = () => setFriends((prev) => [...prev, "Elliot"])
    const decrease = () => setFriends((prev) => prev.slice(0, -1))
    const update = () => {setFriends(friends.map(f => (f === 'Alex'? "Alex Smith" : f)))}
// Assigning style
    const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '3px'}
// if apple, setApple -> A must be capital

  return (
    <section>
        <ul>
            {friends.map(p => (
            <li key={Math.random()}>
                {p}
            </li>
        ))}
        </ul>
        <button style={styles} onClick={increase}>Plus</button>
        <button style={styles} onClick={decrease}>Minus</button> 
        <button style={styles} onClick={update}>Update Friend</button> 
    </section>
  )
}

export default Counter2

