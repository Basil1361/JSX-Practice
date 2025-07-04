import { useState } from "react";

const Practice2 = () => {
  const initialTasks = [
    { id: 1, todo: "study", time: "8:15" },
    { id: 2, todo: "bath",  time: "10:45" },
    { id: 3, todo: "read",  time: "11:00" }
  ]; 

  const [tasks, setTasks]       = useState(initialTasks)
  const [newTodo, setNewTodo]   = useState("")

  const styles = {width: "auto", textAlign: "center", margin: "3px", padding: "4px"}

  const addTask = () => {
    newTodo.trim() ? (setTasks(prev => 
        [...prev,{id: prev.length + 1, todo: newTodo, time: "11:45"}]), setNewTodo(""))
    : 
    null        
}

  return (
    <div>
      {tasks.map(t => (
        <ul key={t.id} style={{ listStyle: "none", padding: 0 }}>
          <li><strong>Todo:</strong> {t.todo}</li>
          <li><strong>Time:</strong> {t.time}</li>
        </ul>
      ))}

      <input style={styles} type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Enter a new todo"
      />
      <button style={styles} onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Practice2