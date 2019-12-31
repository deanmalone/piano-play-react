import React from "react";
import ReactDOM from "react-dom";

type NotationProps = {
  keyId: number
};

type NotationState = {
  notes: number[]
};

export default class Notation extends React.Component<NotationProps, NotationState> {
  state: NotationState = {
    // optional second annotation for better type inference
    notes: []
  };

  // static getDerivedStateFromProps(nextProps: NotationProps, prevState: NotationState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  // }

  render() {
    return (
      <div>
        <p>Key Played: {this.props.keyId}</p>
      </div>
    );
  }
}