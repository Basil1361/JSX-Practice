import { useReducer } from "react";

const Uses = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const styles = {
    width: "30px",
    height: "30px",
    textAlign: "center",
    padding: 0,
    margin: "3px",
  };
  // reducer is a function
  // state is what we are updating
  // action is how are we updating

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };

      case "decrement":
        return { ...state, count: state.count - 1 };

      case "reset":
        return { ...state, count: 0 };

      default:
        return state;
    }
  }
  return (
    <div>
      <h1>{state.count}</h1>
      <button style = {styles} onClick={() => dispatch({ type: "increment" })}>+</button>
      <button style = {styles} onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button style = {styles} onClick={() => dispatch({ type: "reset" })}>.</button>
    </div>
  );
};

export default Uses;
