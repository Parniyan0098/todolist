import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

HabitList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default function HabitList({ habits, onDelete }) {
  return (
    <div>
      {habits.length === 0 ? (
        <p className="no-task">No task yet. Start adding some!</p>
      ) : (
        <ul className="habit-list">
          {habits.map((habit, i) => (
            <li key={i}>
              {habit}{" "}
              <button
                className="btn-delete"
                aria-label={`delete ${habit}`}
                onClick={() => onDelete(i)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
