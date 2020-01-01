import React from 'react';
import './App.css';
import { PianoMode } from './core/enums';
import PlayControl from './components/PlayControl';
import NoteInfo from './components/NoteInfo';
import QuizInfo from './components/QuizInfo';
import Notation from './components/Notation';
import Keyboard from './components/Keyboard';
import { SoundService } from './core/SoundService'
import { PianoNote } from './core/PianoNote';
import { PianoService } from './core/PianoService'

type AppProps = {
};

type AppState = {
  mode: PianoMode;
  keyId: number;
  note?: PianoNote;
};

class App extends React.Component<AppProps, AppState> {

  soundService: SoundService
  pianoService: PianoService

  constructor(props: AppProps) {
    super(props);
    this.state = {
      mode: PianoMode.Play,
      keyId: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.soundService = new SoundService();
    this.pianoService = new PianoService();
  }

  handleModeChange(mode: PianoMode) {
    this.setState({ mode });
  }

  handleKeyPress(keyId: number) {
    this.setState({ keyId });
    this.setState({ note: this.pianoService.getNoteByKeyId(keyId) });

    this.soundService.playNote(keyId);
  }

  render() {
    return (
      <div id="container">
        <div id="side-content">
          <PlayControl
            message="Piano Play"
            mode={this.state.mode}
            onModeSelected={this.handleModeChange}
          />
          <div className="panel">
            {this.state.mode === PianoMode.Play &&
              <NoteInfo />
            }
            {this.state.mode === PianoMode.Quiz &&
              <QuizInfo />
            }
          </div>
        </div>
        <div id="notation-component">
          <Notation note={this.state.note} />
        </div>
        <div id="keyboard-component">
          <Keyboard highlightedKeyId={0} onKeyPress={this.handleKeyPress} />
        </div>
        <p id="appDetails">Built with <a href="https://reactjs.org/" target="_blank">React</a> (v16.12.0)- Source available on <a href="https://github.com/deanmalone/PianoPlay/" target="_blank">GitHub</a></p>
      </div>
    );
  }
}

export default App;
