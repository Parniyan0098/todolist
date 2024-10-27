import PropTypes from "prop-types";
HabitList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function HabitList({ habits, onDelete }) {
  return (
    <div>
      {habits.length === 0 ? (
        <p>No habits yet. Start adding some!</p>
      ) : (
        <ul>
          {habits.map((h, i) => (
            <li key={i}>
              {h} <button onClick={() => onDelete(i)}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
