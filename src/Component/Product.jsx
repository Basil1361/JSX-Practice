import Person from './Person';    
// Parent 
const Product = () => {
  const people = [
    { name: 'Alex',   age: 12 },
    { name: 'William', age: 13 },
    { name: 'Bernard', age: 14 },
  ];

  return (
    <div>
      {people.map((p, i) => (
        <Person 
          key={i} 
          name={p.name} 
          age={p.age} 
        />
      ))}
    </div>
  );
};

export default Product;
