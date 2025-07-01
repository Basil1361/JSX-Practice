import { useState } from "react";

const Practice2 = () => {
  // 1) Your initial list of tasks
  const initialTasks = [
    { id: 1, todo: "study", time: "8:15" },
    { id: 2, todo: "bath",  time: "10:45" },
    { id: 3, todo: "read",  time: "11:00" }
  ];

  // 2) State to hold the array AND state for the input field
  const [tasks, setTasks]       = useState(initialTasks);
  const [newTodo, setNewTodo]   = useState("");

  const styles = {
    width: "auto",
    textAlign: "center",
    margin: "3px",
    padding: "4px"
  };

  // 3) Handler adds whatever is in `newTodo` as a task,
  //    stamping it with a new id + the current time
  const addTask = () => {
    if (!newTodo.trim()) return;           // ignore empty
    setTasks(prev => [
      ...prev,
      {
        id: prev.length + 1,
        todo: newTodo,
        time: new Date().toLocaleTimeString([], {
          hour:   "2-digit",
          minute: "2-digit"
        })
      }
    ]);
    setNewTodo("");                         // clear the box
  };

  return (
    <div>
      {/* 4) Render the up-to-date list */}
      {tasks.map(t => (
        <ul key={t.id} style={{ listStyle: "none", padding: 0 }}>
          <li><strong>Todo:</strong> {t.todo}</li>
          <li><strong>Time:</strong> {t.time}</li>
        </ul>
      ))}

      {/* 5) Controlled input + button */}
      <input
        style={styles}
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button style={styles} onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Practice2
