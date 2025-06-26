import TempChild from "./TempChild";


const TempParent = () => {
  const data = {
    cold : "It's cold outside",
    warm : "It's nice outside",
    hot : "It's hot outside",
  };
    let temp = 26;

  if (temp < 16) {
  return (
      <div>
            <TempChild cold={data.cold}/>
      </div>
    )
  } 
  else if (temp >= 16 && temp <= 25) {
    return (
      <div>
            <TempChild cold={data.warm}/>
      </div>
    )
  }
  else {
    return (
      <div>
            <TempChild cold={data.hot}/>
      </div>
    )
}
}
export default TempParent;




//const Ifelse = ({ isValid }) => {
  //if (isValid) {
  //  return <ValidPassword />
  //}
 // return <InValidPassword />
//}

//export default Ifelse
