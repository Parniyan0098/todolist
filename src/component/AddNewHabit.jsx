import { useState } from "react";
import HabitList from "./HabitList";
export default function AddNewHabit() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  function addNewHabit(e) {
    setHabit(e.target.value);
  }
  function addHabitList() {
    if (habit?.trim()) setHabits([...habits, habit]);
    setHabit("");
  }
  return (
    <>
      <input type="text" value={habit} onChange={addNewHabit} />
      <button onClick={addHabitList}>Add your new habit</button>
      <HabitList habits={habits} />
    </>
  );
}
