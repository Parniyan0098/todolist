import { useState } from "react";
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
      setHabits([...habits, habit]);
      setHabit("");
    } else {
      setError("please enter your habit");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addHabitList();
    }
  }
  return (
    <>
      <input
        type="text"
        value={habit}
        onChange={addNewHabit}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addHabitList}>Add your new habit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <HabitList habits={habits} />
    </>
  );
}
