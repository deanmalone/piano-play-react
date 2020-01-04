import React from "react";
import $ from 'jquery';
import { NotationService } from './NotationService';
import { PianoNote } from '../core/PianoNote';
import './Notation.css';

type NotationProps = {
  notes: PianoNote[]
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

  componentDidUpdate() {
    let self=this;
    $("g.note").off().on('click', function () { self.noteClicked((this as any).id); });

    // Update color of the notes
    for (let i = 0; i < this.props.notes.length; i++) {
      if (this.props.notes[i].color) {
        $("#" + i).attr("fill", this.props.notes[i].color)
      }
    }

  }

  noteClicked(id: number) {
    console.log('noteClicked: ' + id);
  }

  render() {
    const svg = this.notationService.renderNotation(this.props.notes)
    return (
      <div id="notation" dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }
}
