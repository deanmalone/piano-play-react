import React from "react";
import ReactDOM from "react-dom";

type NoteInfoProps = {
};

type NoteInfoState = {
  count: number; // like this
};

export default class NoteInfo extends React.Component<NoteInfoProps, NoteInfoState> {
  state: NoteInfoState = {
    // optional second annotation for better type inference
    count: 0
  };
  render() {
    return (
      <div>
        <p>NoteInfo</p>
      </div>
    );
  }
}