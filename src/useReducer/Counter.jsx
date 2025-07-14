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
  const Submission = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <p>Add Something: </p>
      <form onSubmit={Submission}>
        <input
          value={input}
          type="number"
          style={styles}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type = "submit" style = {styles2}>+</button>
      </form>
    </div>
  );
};

export default Counter;
