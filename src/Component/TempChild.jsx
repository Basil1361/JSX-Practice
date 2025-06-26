const Temperature = (props) => {
  return (
    <div>
      <p>{props.cold}</p>
      <p>{props.warm}</p>
      <p>{props.hot}</p>
    </div>
  )
}

export default Temperature