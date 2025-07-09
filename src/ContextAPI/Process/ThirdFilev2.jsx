import { Data } from "./Compilev2"

const ThirdFilev2 = () => {
  return (
    <Data.Consumer>
        {(name) => {
            return (
                <p>{name}</p>
            )
        }}
    </Data.Consumer>
  )
}

export default ThirdFilev2