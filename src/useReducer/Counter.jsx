import { useState, useReducer } from "react";
import { initialState, Reducing } from "./Reducing";

const Counter = () => {
  const [state, dispatch] = useReducer(Reducing, initialState);
  const [input, setInput] = useState("");
  const styles = {
    width: "60px",
    height: "30px",
    textAlign: "center",
    padding: 0,
    margin: "3px",
  };

  const styles2 = {
    width: "30px",
    height: "30px",
    textAlign: "center",
    padding: 0,
    margin: "3px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: +input });
    setInput("");
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: +input });
    setInput("");
  };

   const handleCustom = () => {
    dispatch({ type: "custom", payload: +input });
    setInput("");
  }; 

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="number"
          style={styles}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleCustom} type="submit" style={styles}>Enter</button>
        <br />
        <p> Plus by 1</p>
        <button onClick={handleIncrement} type="submit" style={styles2}>
          +
        </button>
        <p> Minus by 1</p>
        <button onClick={handleDecrement} type="submit" style={styles2}>
          -
        </button>
      </form>
    </div>
  );
};

export default Counter;
