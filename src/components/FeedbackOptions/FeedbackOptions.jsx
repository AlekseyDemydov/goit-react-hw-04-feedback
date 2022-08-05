import PropTypes from 'prop-types';
import styles from './FeedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.btnFeedback}>
      {options.map(nameEl => {
        return (
          <li key={nameEl} className={styles.btnFeed}>
            <button
              type="button"
              name={nameEl}
              onClick={onLeaveFeedback}
              className={styles.btn}
            >
              {nameEl}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
