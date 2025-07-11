import ContextTest from "./ContextTest";
import Children    from "./Children";

const Wrapper = () => (
  <ContextTest>
    <Children />
  </ContextTest>
);

export default Wrapper;
