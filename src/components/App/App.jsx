import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import s from 'components/App/App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = options => {
    switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    const percentage = Math.round((good / value) * 100);

    if (!percentage) return 0;
    return percentage;
  }

  const optionName = ['good', 'neutral', 'bad'];
  const value = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
    <div className={s.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionName}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {value === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={value}
            positivePercentage={percent}
          />
        )}
      </Section>
    </div>
  );
}
