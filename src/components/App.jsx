import React from "react";
import Statistics from "./statistics/statistics";
import FeedbackOptions from "./feedbackOptions/feedbackOptions";
import Section from "./section/section";
import Notification from "./notification/notification";
export class App extends React.Component { 

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  CountPositiveFeedbackPercentage = (event) => {
    if (this.state.good === 0) { 
      return 0
    }
    return (this.state.good / this.CountTotalFeedback() * 100).toFixed()
  }
  CountTotalFeedback = (event) => {
    return Number(this.state.good + this.state.neutral + this.state.bad)
  }
  addFeedback = (event) => {
    event.preventDefault();
    const id = event.target.id
    this.setState({
      [id]: this.state[id] + 1
    });
  }
  render() { 
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}/>
        </Section>
        <Section title="Statistics">
          {this.CountTotalFeedback() === 0
            ?(<Notification message="There is no feedback"></Notification>) 
            :(<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={<this.CountTotalFeedback />} positivePercentage={<this.CountPositiveFeedbackPercentage />} />) }
        </Section>
      </div>
    );
  }

}

