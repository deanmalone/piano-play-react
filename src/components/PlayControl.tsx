import React, { MouseEvent } from 'react';
import ReactDOM from "react-dom";
import { PianoMode } from '../core/enums';
import './PlayControl.css';

type PlayControlProps = {
  // using `interface` is also ok
  message: string;
  mode: PianoMode;
  onModeSelected(mode: PianoMode): void;
};

type PlayControlState = {
};

export default class PlayControl extends React.Component<PlayControlProps, PlayControlState> {

  render() {
    return (
      <div className="panel">
        <div className="header">{this.props.message}</div>
        <div className="content">
          <div className="row">
            <span>A simple and fun way for beginners to learn music notation.</span>
          </div>
          <div className="row">
            <button className={`btn btn-primary ${this.props.mode === PianoMode.Play ? 'selected' : ''}`} onClick={() => this.props.onModeSelected(PianoMode.Play)}>Play</button>
            <button className={`btn btn-primary ${this.props.mode === PianoMode.Quiz ? 'selected' : ''}`} onClick={() => this.props.onModeSelected(PianoMode.Quiz)}>Quiz</button>
          </div>
        </div>
      </div>
    );
  }
}