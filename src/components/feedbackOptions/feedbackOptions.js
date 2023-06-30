import propTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const id = Object.keys(options);
  return (
    <ul>
      {id.map(option => (
        <li key={option}>
          <button id={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
    options: propTypes.object.isRequired,
    onLeaveFeedback : propTypes.func.isRequired
}
