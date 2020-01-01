import React from "react";
import ReactDOM from "react-dom";
import { PianoNote } from '../core/PianoNote';
import './NoteInfo.css';

type NoteInfoProps = {
  note?: PianoNote
  alternateNote?: PianoNote
};

type NoteInfoState = {
};

export default class NoteInfo extends React.Component<NoteInfoProps, NoteInfoState> {

  render() {

    const title = (this.props.note) ? "Now playing" : "Play";

    return (
      <div>
        <div className="header-secondary">{title}</div>
        <div className="content">
          {!this.props.note &&
            <div>
              <div className="row">
                <span>Press a key on the <b>piano</b>&nbsp;<i>below</i>,</span><br />
                <span>and see the note appear on the</span><br />
                <span><b>piano score</b> to the <i>right.</i></span>
              </div>
            </div>
          }
          {this.props.note &&
            <div className="note-card" >
              <span className="name">{this.props.note.fullname}</span>
              <span className="octave">OCTAVE {this.props.note.octave}</span>
            </div>
          }
          {this.props.alternateNote &&
            <div className="note-card-or">
              <span> OR </span>
            </div>
          }
          {this.props.alternateNote &&
            <div className="note-card">
              <span className="name">{this.props.alternateNote.fullname}</span>
              <span className="octave">OCTAVE {this.props.alternateNote.octave}</span>
            </div>
          }
        </div >
      </div >
    );
  }
}