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
  alternateNote?: PianoNote;
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
    this.handleNotePress = this.handleNotePress.bind(this);

    this.soundService = new SoundService();
    this.pianoService = new PianoService();
  }

  handleModeChange(mode: PianoMode) {
    this.setState({ mode, note: undefined, alternateNote: undefined });
  }

  handleKeyPress(keyId: number) {
    const note = this.pianoService.getNoteByKeyId(keyId);
    const alternateNote = this.pianoService.getAlternateNote(note.noteId);

    this.setState({ keyId, note: note, alternateNote: alternateNote });

    this.soundService.playNote(keyId);
  }

  handleNotePress(note: PianoNote) {
    const alternateNote = this.pianoService.getAlternateNote(note.noteId);

    this.setState({ keyId: note.keyId, note: note, alternateNote: alternateNote });

    this.soundService.playNote(note.keyId);
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
              <NoteInfo note={this.state.note} alternateNote={this.state.alternateNote} onNotePress={this.handleNotePress} />
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
        <p id="appDetails">Built with <a href="https://reactjs.org/">React</a> (v16.12.0) - Source available on <a href="https://github.com/deanmalone/piano-play-react/">GitHub</a></p>
      </div>
    );
  }
}

export default App;
