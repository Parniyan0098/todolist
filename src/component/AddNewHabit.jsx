import { useEffect, useState } from "react";
import HabitList from "./HabitList";
export default function AddNewHabit() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState("");
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
      setError("please enter your habit");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addHabitList();
    }
  }
  function handleDelet(index) {
    if (window.confirm("are you sure?")) {
      const updatedHabits = habits.filter((_, i) => i !== index);
      setHabits(updatedHabits);
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
    }
  }
  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);

  return (
    <div className="main-container">
      <input
        type="text"
        value={habit}
        onChange={addNewHabit}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addHabitList}>Add your new habit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <HabitList habits={habits} onDelete={handleDelet} />
    </div>
  );
}
