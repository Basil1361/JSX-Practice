const Customer = () => {

const userinfo = [
{id: 1, items: "Computer", price: 1200},
{id: 2, items: "Mouse", price: 100},
{id: 3, items: "Phone", price: 700}, 
]

  return (
    <div>
        {userinfo.map(customer => (
            <ul key = {customer.id}>
                <h1>Items: {customer.items}</h1>
                <h1>Price: RM{customer.price}</h1>


            </ul>

        ))}
    </div>
  );
};

export default Customer

