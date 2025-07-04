import { useState , useEffect} from "react";

const Practice4 = () => {
  const [items, setItems]       = useState(() => {
    const saved = localStorage.getItem("items")
    return saved ? JSON.parse(saved) : []
})

useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));}, [items])

  const [name, setName]         = useState("")
  const [quantity, setQuantity] = useState("")
  const styles = {
    width: "auto",
    textAlign: "center",
    margin: "3px",
    padding: "4px",
  }

    const newItem = {
      name,
      quantity: parseInt(quantity)
    }


  const handleSubmit = (e) => {
    e.preventDefault();
   if (name && quantity)  
    setItems(prev => [...prev, newItem]);
    setName("")
    setQuantity("")
  }

  const remove = () => {
    setItems(prev =>
      prev.filter(item => item.quantity >= 50)
  )
}


  return (
    <div>
      <h2>Shopping List:</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles}
          name="name"
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles}
          name="quantity"
          type="number"
          placeholder="Amount"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button style={styles} type="submit">
          Add Item
        </button>
        <button style={styles} onClick={remove}>
          Filter Item
        </button>
      </form>
      <ul>
        {items.map((thing, index) => (
          <li key={index}>
            Name: {thing.name} - Quantity: {thing.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Practice4


/*
Alternative:
   if (!name || !quantity) return;  
    setItems(prev => [...prev, newItem]);
    setName("");
    setQuantity("");
*/

/*
Alternative:
   if (name && quantity)  
    setItems(prev => [...prev, newItem]);
    setName("");
    setQuantity("");
*/




