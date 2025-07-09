import { Data , Data1 } from "../Process/Compilev2"

const ThirdFilev2 = () => {
  return (
    <Data.Consumer>
        {(name) => {
            return (
                <Data1.Consumer>
                    {(age) => {
                        return(
                            <p>My name is {name}, and I'm {age} years old</p>
                        )
                    }}
                </Data1.Consumer>
            )
        }}
    </Data.Consumer>
  )
}

export default ThirdFilev2