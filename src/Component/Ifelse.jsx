const ValidPassword = () => <h1>Valid Password</h1>
const InValidPassword = () => <h1>Invalid Password</h1>

const Ifelse = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />
  }
  return <InValidPassword />
}

export default Ifelse
