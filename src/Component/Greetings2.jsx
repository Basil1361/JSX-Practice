const Greetings2 = () => {

  const header = "Greetings Everyone";
  const date = new Date();
  const product = {
    name : "Laptop",
    price : "1500",
    availability : "In Stock",
  };


  return (
    <div>
      <h1>{header}</h1>
      <p>Date: {date.getDate()}</p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  )
}

export default Greetings2