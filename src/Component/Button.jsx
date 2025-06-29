const Button = () => {
    const Press = () => console.log(Math.round(Math.random()*10))
  return (
    <button onClick={Press}>
        Click Me!
    </button>
  )
}

export default Button