import React from "react";
import ReactDOM from "react-dom";
import { NotationService } from './NotationService';
import './Notation.css';

type NotationProps = {
  keyId: number
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

  // static getDerivedStateFromProps(nextProps: NotationProps, prevState: NotationState){
  //   if(nextProps.someValue!==prevState.someValue){
  //     return { someState: nextProps.someValue};
  //  }
  //  else return null;
  // }
  componentDidMount() {
    this.setState({ notationAsSVG: this.notationService.renderNotation() })
  }

  render() {
    const svg = this.state.notationAsSVG;
    return (
      <div id="notation" dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }
}
