import ContextTest from "./ContextTest";
import Children    from "./UpdateState";

const Wrapper = () => (
  <ContextTest>
    <Children />
  </ContextTest>
);

export default Wrapper;
