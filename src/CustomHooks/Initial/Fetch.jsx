import { useEffect } from "react";
import { useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((text) => {
          return (
            <section key={text.id}>
              <p>{text.title}</p>
            </section>
          );
        })}
    </div>
  );
};

export default Fetch;


// alternative without if statement
// return (
//   <div>
//     {data.map((text) => {
//       <section key={text.id}>
//         <p>{text.title}</p>
//       </section>;
//     })}
//   </div>
// );
