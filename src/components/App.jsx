import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  static propTypes = {};

  onGood = () => {
    this.setState(prev => ({
      good: prev.good + 1,
    }));
  };

  onNeutral = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
    }));
  };

  onBad = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
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
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          percentage={this.state.percentage}
        />
        </Section>
      </>
    );
  }
}
