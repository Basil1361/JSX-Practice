import { useContext } from "react";
import { Contextinfo } from "./ContextTest";

const Children = () => {
  const { info } = useContext(Contextinfo);
  return (
    <section>
    <p>
    Name: {info.name}
    </p>
    <p>
    Age: {info.age}
    </p>
    </section>
)
}

export default Children