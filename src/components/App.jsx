import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
    visible: false,
  };

  onGood = () => {
    this.setState(prev => ({
      good: prev.good + 1,
      visible: true,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  onNeutral = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
      visible: true,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  onBad = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
      visible: true,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({
      total: prev.bad + prev.good + prev.neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      percentage: Math.round((prev.good * 100) / prev.total),
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.onGood}
            onNeutral={this.onNeutral}
            onBad={this.onBad}
          />
        </Section>
        <Section title="Statistics">
          {this.state.visible ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              percentage={this.state.percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
