import { useState } from "react";
import Popup from "./Popup";

const CopyInput = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const styles = {
    width: "auto",
    textAlign: "center",
    margin: "3px",
    padding: "4px",
  };
  const copy = () => {
    input.trim() ? (
    navigator.clipboard.writeText(input).then(() => {
        setCopied(false),
        setTimeout(() => setCopied(true),2000)
    }))
    : 
    null
  }
  return (
    <div>
      <input
        value={input}
        placeholder="Type here"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={copy} style = {styles}>Copy</button>
      <Popup whileCopy = {copied} text={input}></Popup>
    </div>
  );
};

export default CopyInput;