// Destructing props

const TimeofDayp1 = ({timeOfDay}) => {
  return (
    timeOfDay === "morning" ? 
    <h1>Good Morning</h1>
    : 
    timeOfDay === "afternoon" ? 
    <h2>Good Afternoon</h2>
    : 
    <h3>Good Night</h3>

)
}


export default TimeofDayp1



// With props
/*
const TimeofDayp1 = (props.timeOfDay) => {
  return (
    props.timeOfDay === "morning" ? 
    <h1>Good Morning</h1>
    : 
    props.timeOfDay === "afternoon" ? 
    <h2>Good Afternoon</h2>
    : 
    <h3>Good Night</h3>

)
}


export default TimeofDayp1

*/