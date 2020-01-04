import React from "react";
import './QuizInfo.css';

import { QuizStatus, Result } from '../core/enums';
import { QuizResult } from "../core/QuizResult";

type QuizInfoProps = {
  correct: number;
  incorrect: number;
  total: number;
  status: QuizStatus;
  description: string;
  result?: QuizResult;
  onStartClick(level: string): void;
  onTryAgainClick(): void;
};

type QuizInfoState = {
  level: string;
};

export default class QuizInfo extends React.Component<QuizInfoProps, QuizInfoState> {

  constructor(props: QuizInfoProps) {
    super(props);
    this.state = {level: 'easy'};

    this.handleLevelChange = this.handleLevelChange.bind(this);
  }

  handleLevelChange(event: any) {
    this.setState({level: event.target.value});
  }

  render() {

    let message = "";
    if(this.props.status === QuizStatus.InProgress && this.props.result){
      message = (this.props.result.result === Result.Correct) ? "\u2714 Correct, well done!" : "\u2718 Incorrect"
    }

    return (
      <div>
        <div className="header-secondary">Quiz</div>
        <div className="content">
          {this.props.status === QuizStatus.Starting &&
          <div>
            <div className="row">
              <span>Select level:</span>
              <select className="dropdown" value={this.state.level} onChange={this.handleLevelChange}>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
              </select>
            </div>
            <div className="row">
              <button id="start-btn" className="btn btn-secondary" onClick={() =>this.props.onStartClick(this.state.level)}>Start</button>
            </div>
          </div>}
          {this.props.status === QuizStatus.InProgress &&
          <div>
            <div className="row">
              <span>Press the correct key on the piano.</span>
            </div>
            <div className="row">
              <span className="score-label">Score</span><span className="score correct">{ this.props.correct }</span><span className="score incorrect">{ this.props.incorrect }</span>
            </div>
            <div className="row">
              <span>{ message }</span>
            </div>
          </div>}
          {this.props.status === QuizStatus.Finished &&
          <div>
            <div className="row">
              <span>Your score: </span><span><b>{ this.props.correct }</b> out of { this.props.total }</span>
            </div>
            <div className="row">
              <span>{ this.props.description }</span>
            </div>
            <div className="row">
              <button id="tryagain-btn" className="btn btn-secondary" onClick={() =>this.props.onTryAgainClick()}>Try Again?</button>
            </div>
          </div>}
        </div >
      </div >
    );
  }
}
