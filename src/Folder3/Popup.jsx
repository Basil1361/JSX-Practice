const Popup = ({whileCopy, text}) => {
  const styles = {bottom : "1rem", position : "absolute"} 
  return (
    <section>
      {whileCopy && (
      <p style = {styles}>
        {text}
      </p>
    )}
    </section>
  )
}

export default Popup