import Custom from "./Custom";

const Sorter = () => {
  const [data] = Custom("https://jsonplaceholder.typicode.com/todos");
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

export default Sorter;
