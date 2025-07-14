const TestObject = () => {
    const data = {
        car: {
            color : "red",
            wheels : 4
        }
    }
   const handleClick = () => {
    console.log(data.car.color)
   } 
  return (
    <button onClick={handleClick}>Click</button>
  )
}

export default TestObject

