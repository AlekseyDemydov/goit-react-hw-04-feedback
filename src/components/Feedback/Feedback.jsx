import React from 'react';
import Section from '../Section/Section';
import Statistics from '../Stat/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFedback = e => {
    e.preventDefault();

    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };
  render() {
    const options = ['good', 'neutral', 'bad'];
    return (
      <div className={styles.main}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFedback}
          />
        </Section>

        <h2>Statistics</h2>
        {this.countTotalFeedback() ? (
          <Statistics
            posProc={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()}
            sGood={this.state.good}
            sNeutral={this.state.neutral}
            sBad={this.state.bad}
          />
        ) : (
          'There is no feedback'
        )}
      </div>
    );
  }
}

export default Feedback;
