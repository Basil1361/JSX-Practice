const ValidPassword = () => <h1>Valid Password</h1>
const InValidPassword = () => <h1>Invalid Password</h1>

const Ifelse = ({ isValid }) => 
  isValid ? <ValidPassword/> : <InValidPassword/>


export default Ifelse
