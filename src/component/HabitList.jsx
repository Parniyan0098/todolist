import PropTypes from "prop-types";
HabitList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default function HabitList({ habits }) {
  return (
    <div>
      <ul>
        {habits.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
