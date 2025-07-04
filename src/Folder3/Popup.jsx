const Popup = ({whileCopy}) => {
  const styles = {bottom : "1rem", position : "absolute"} 
  return (
    <section>
      {whileCopy && (
      <p style = {styles}>
        Copied
      </p>
    )}
    </section>
  )
}

export default Popup