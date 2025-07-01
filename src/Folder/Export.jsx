import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { useState } from "react";

const Export = () => {
const [value, setValue] = useState(() => {
    const initial = 10
    return initial 
})
// or just put useState(10) 
const increment = () => {setValue (value + 1)}

  return (
    <div>
        <First count = {value} change = {increment}/>
        <Second count = {value} change = {increment} />
        <Third/>

    </div>
  )
}

export default Export