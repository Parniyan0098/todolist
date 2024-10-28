import PropTypes from "prop-types";
HabitList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function HabitList({ habits, onDelete }) {
  return (
    <div>
      {habits.length === 0 ? (
        <p>No task yet. Start adding some!</p>
      ) : (
        <ul>
          {habits.map((habit, i) => (
            <li key={i}>
              {habit}{" "}
              <button
                aria-label={`delete ${habit}`}
                onClick={() => onDelete(i)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
