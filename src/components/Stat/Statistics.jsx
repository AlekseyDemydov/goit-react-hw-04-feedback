import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ sGood, sNeutral, sBad, total, posProc }) => (
  <div className={styles.stats}>
    <span>good: {sGood}</span>
    <span>neutral: {sNeutral}</span>
    <span>bad: {sBad}</span>
    <span>total: {total}</span>
    <span>positive feedback: {Math.round(posProc)}%</span>
  </div>
);
export default Statistics;

Statistics.propTypes = {
  sGood: PropTypes.number.isRequired,
  sNeutral: PropTypes.number.isRequired,
  sBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posProc: PropTypes.number.isRequired,
};
