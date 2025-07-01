
const First = ({count, change}) => {
const newValue = () => change()
const styles = { width: "auto", height: "auto", textAlign: "center", padding: 0, margin: '1px'}
  return (
    <div>
        <p>
        {count}
        </p>
        <button onClick={newValue} style = {styles}>
            Plus
        </button>
    </div>
  )
}

export default First