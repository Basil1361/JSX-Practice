import { useState } from "react"

const Practice3 = () => {
const styles = {width: "auto", textAlign: "center", margin: "3px", padding: "4px"}
const [profile, setProfile] = useState({
    name : "Hello",
    age : "17"
})
const change = (e) => {
    const {name, value} = e.target
    setProfile((prev) => ({...prev, [name]:value}))
}
// if no destructure, 
// const change = (e) => 
// {const name = e.target.name 
// const value = e.target.value}

  return (
    <div>
        <h2>
            User Profile:
        </h2>
        <div>
            <label> Name: 
                <input type = "text" name="name" value = {profile.name} onChange={change} style={styles}></input>
            </label>
        </div>
        <br/>
        <div>
            <label> Age:
                <input type = "number" name="age" value = {profile.age} onChange={change} style={styles}></input>
            </label>
        </div>
        <h3>
            Profile Info:
        </h3>
            <p>
                Name: {profile.name}
            </p>
            <p>
                Age: {profile.age}
            </p>

    </div>
  )
}

export default Practice3