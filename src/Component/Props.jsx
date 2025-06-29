const Parent = () => {

  return (
    <div>
      <Child 
      image = "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA=="
      size = {400}
      age = {22}
      isMarried = {false}
       hobbies = {['reading', 'coding','sleeping']} 
     />
    </div>
  )
}


const Child = (props) => {
    return(
        <div>
            <section>
                <img src={props.image} alt={props.message || 'child image'} 
                width= {props.size} 
                style={{ height: 'auto' }} 
                />
                <br></br>
                <li>Age: {props.age}</li>
                <li>Married: {props.isMarried ? 'Yes' : 'No'}</li>
                <li> Hobbies: {props.hobbies.map(h => h[0].toUpperCase() + h.slice(1)).join(', ')}</li>

            </section>
        </div>
    )
}


export default Parent



