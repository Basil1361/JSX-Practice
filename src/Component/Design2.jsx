// with CSS styling

import "../Index.css"
import { GiPokerHand } from "react-icons/gi";

const Design2 = () => {
// const styles = {color: 'cyan', backgroundColor : 'crimson', padding : "2rem",}
const text = "Hello World!"

  return (
    <section>
    <h1 color>{text}</h1>
    <GiPokerHand/>
    </section>
  )
}

export default Design2

// <h1 style = {styles}>{text}</h1> (if styles is enabled)