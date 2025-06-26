const Parentv3 = () => {
  const people = [
    { name: 'Alex',   age: 12 },
    { name: 'William', age: 13 },
    { name: 'Bernard', age: 14 },
  ];

  return (
    <div>
      <Childv3 people={people} />
    </div>
  );
};

const Childv3 = (props) => {
  return (
    <div>
      {props.people.map(p => (
        <h2 key = {p.name}>
          Name: {p.name}, Age: {p.age}
           </h2>
        
      ))}
    </div>
  );
};

export default Parentv3;

/*


const Childv3 = (props) => {
  return (
    <div>
      {props.name.map((personName, idx) => (
        <h2 key={idx}>
          Name: {personName}, Age: {props.age[idx]}
        </h2>
      ))}
    </div>
  );
};

*/