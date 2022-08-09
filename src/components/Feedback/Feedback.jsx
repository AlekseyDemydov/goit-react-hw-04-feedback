import React from 'react';
import { useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import styles from './Feedback.module.css';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.ceil((good / total) * 100) : 0;

  const handleLeaveFedback = e => {
    e.preventDefault();
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('default case');
    }
  };
  return (
    <div className={styles.main}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFedback}
        />
      </Section>

      <h2>Statistics</h2>
      {total ? (
        <Statistics
          posProc={positivePercentage}
          total={total}
          sGood={good}
          sNeutral={neutral}
          sBad={bad}
        />
      ) : (
        'There is no feedback'
      )}
    </div>
  );
};

export default Feedback;
