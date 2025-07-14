import { useContext, useState } from "react";
import { NameData, AgeData } from "./ContextTest";

const Children = () => {
  const [newUser, setNewUser] = useState("");
  const [newAge, setNewAge] = useState("");
  const { name, updateName } = useContext(NameData);
  const { age, updateAge } = useContext(AgeData);

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected typo

    if (newUser.trim()) {
      updateName(newUser); // Correctly call updateName
      setNewUser("");
    }

    if (newAge.trim()) {
      updateAge(newAge); // Correctly call updateAge
      setNewAge("");
    }
  };

  const styles = {
    width: "auto",
    height: "auto",
    textAlign: "center",
    padding: 0,
    margin: "3px",
  };

  return (
    <section>
      <h1>Profile:</h1>
      <p>Name: {name.name}</p>
      <p>Age: {age.age}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser}
          placeholder="Enter new name"
          style={styles}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <input
          type="number"
          value={newAge}
          placeholder="Enter new age"
          style={styles}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button type="submit" style={styles}>
          Update
        </button>
      </form>
    </section>
  );
};

export default Children;
