import React from "react";
import ReactDOM from "react-dom";
import { NotationService } from './NotationService';
import { PianoNote } from '../core/PianoNote';
import './Notation.css';

type NotationProps = {
  note?: PianoNote
};

type NotationState = {
  notationAsSVG: any,
  notes: number[]
};

export default class Notation extends React.Component<NotationProps, NotationState> {

  notationService: NotationService

  constructor(props: NotationProps) {
    super(props);
    this.state = {
      notationAsSVG: null,
      notes: []
    };

    this.notationService = new NotationService();
  }

  render() {
    if (this.props.note) {
      this.notationService.addNote(this.props.note);
    }
    const svg = this.notationService.renderNotation()
    return (
      <div id="notation" dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }
}
