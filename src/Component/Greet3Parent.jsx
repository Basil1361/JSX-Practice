import Greet3Child from "./Greet3Child";

const Greet3Parent = () => {
  return (
    <Greet3Child isAdmin = {true} user = {false}/>
  )
}

export default Greet3Parent