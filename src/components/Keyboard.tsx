import React from "react";
import ReactDOM from "react-dom";
import './Keyboard.css';

type KeyboardProps = {
  highlightedKeyId: number;
  onKeyPress(keyId: number): void;
};

type KeyboardState = {
};

type PianoKey = {
  whiteKeyId: number;
  blackKeyId?: number;
}

export default class Keyboard extends React.Component<KeyboardProps, KeyboardState> {

  state: KeyboardState = {
  };

  pianoKeys: PianoKey[] = [
    {whiteKeyId :16} ,
    {whiteKeyId :18, blackKeyId: 17},
    {whiteKeyId :20, blackKeyId: 19},
    {whiteKeyId :21},
    {whiteKeyId :23, blackKeyId: 22},
    {whiteKeyId :25, blackKeyId: 24},
    {whiteKeyId :27, blackKeyId: 26},
    {whiteKeyId :28} ,
    {whiteKeyId :30, blackKeyId: 29},
    {whiteKeyId :32, blackKeyId: 31},
    {whiteKeyId :33},
    {whiteKeyId :35, blackKeyId: 34},
    {whiteKeyId :37, blackKeyId: 36},
    {whiteKeyId :39, blackKeyId: 38},
    {whiteKeyId :40} ,
    {whiteKeyId :42, blackKeyId: 41},
    {whiteKeyId :44, blackKeyId: 43},
    {whiteKeyId :45},
    {whiteKeyId :47, blackKeyId: 46},
    {whiteKeyId :49, blackKeyId: 48},
    {whiteKeyId :51, blackKeyId: 50},
    {whiteKeyId :52} ,
    {whiteKeyId :54, blackKeyId: 53},
    {whiteKeyId :56, blackKeyId: 55},
    {whiteKeyId :57},
    {whiteKeyId :59, blackKeyId: 58},
    {whiteKeyId :61, blackKeyId: 60},
    {whiteKeyId :63, blackKeyId: 62},
    {whiteKeyId :64}
  ];

  getColor(keyId: number) {
    if(keyId === this.props.highlightedKeyId){
      return "#f0e68c";
    }
    else {
      return "";
    }
  }

  render() {

    const keys = this.pianoKeys.map((key) =>
      <li>
        <div className="anchor" onClick={() => this.props.onKeyPress(key.whiteKeyId)}></div>
        {key.blackKeyId && <span onClick={() => this.props.onKeyPress(key.blackKeyId!)}></span>}
      </li>
    );

    return (
      <div id="p-wrapper">
        <ul id="piano">
          {keys}
        </ul>
      </div>
    );
  }
}