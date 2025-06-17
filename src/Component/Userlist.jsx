const Userlist = () => {

const userinfo = [
{id: 1, name: "Alice", age: 35},
{id:2, name: "Bern", age: 40},
{id: 3, name: "Sean", age: 25}, 
]


return (
  <div>
    {userinfo.map(p => (

      <ul key={p.id}>
        <h1>Name: {p.name}, Age: {p.age}</h1>
      </ul>
    ))}



  </div>



)

}

export default Userlist