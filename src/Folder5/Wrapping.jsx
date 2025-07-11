import Children from "./Children"
import ContextTest from "./ContextTest"

function Wrapping () {
  return (
    <ContextTest>
        <Children/>
    </ContextTest>
  )
}

export default Wrapping