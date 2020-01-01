import React from "react";
import ReactDOM from "react-dom";

type QuixInfoProps = {
};

type QuixInfoState = {
  count: number; // like this
};

export default class QuizInfo extends React.Component<QuixInfoProps, QuixInfoState> {
  state: QuixInfoState = {
    // optional second annotation for better type inference
    count: 0
  };
  render() {
    return (
      <div>
        <div className="header-secondary">Quiz</div>
        <div className="content">

        </div >
      </div >
    );
  }
}
