import { useEffect, useState } from "react";
import HabitList from "./HabitList";
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
export default function AddNewHabit() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState("");
  const currentDate = new Date().toLocaleDateString("en-UK", options);

  function addNewHabit(e) {
    setHabit(e.target.value);
    if (error) setError("");
  }
  function addHabitList() {
    if (habit?.trim()) {
      const updatedHabits = [...habits, habit];
      setHabits(updatedHabits);
      setHabit("");
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
    } else {
      setError("please enter your task");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addHabitList();
    }
  }
  function handleDelete(index) {
    if (window.confirm("are you sure?")) {
      const updatedHabits = habits.filter((_, i) => i !== index);
      setHabits(updatedHabits);
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
    }
  }
  function handleDeleteAll() {
    if (window.confirm("You will delete all you list,are you sure?"))
      setHabits("");
    localStorage.removeItem("habits");
  }

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);

  return (
    <>
      <div className="main-container">
        <h1>To Do List</h1>
        <p className="date">{currentDate}</p>

        <input
          type="text"
          value={habit}
          onChange={addNewHabit}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addHabitList}>Add your new task</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <HabitList habits={habits} onDelete={handleDelete} />
        <button onClick={handleDeleteAll}>Delet all your list</button>
      </div>
    </>
  );
}
