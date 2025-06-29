const Hover = () => {
    function Hover () {
        alert("Do not Copy")
        console.log("Do not copy")
    }
  return ( 
    <p onMouseMove={Hover}>
        Hover Me And Find Out! 
    </p>
  )
}

export default Hover