import React from 'react';
import './App.css';
import { PianoMode, QuizStatus } from './core/enums';
import PlayControl from './components/PlayControl';
import NoteInfo from './components/NoteInfo';
import QuizInfo from './components/QuizInfo';
import Notation from './components/Notation';
import Keyboard from './components/Keyboard';
import { SoundService } from './core/SoundService'
import { PianoNote } from './core/PianoNote';
import { PianoService } from './core/PianoService'
import { QuizService } from './core/QuizService'
import { QuizResult } from './core/QuizResult';

type AppProps = {
};

type AppState = {
  mode: PianoMode;
  keyId: number;
  note?: PianoNote;
  alternateNote?: PianoNote;
  quizCorrect: number;
  quizIncorrect: number;
  quizLength: number;
  quizStatus: QuizStatus;
  quizResult?: QuizResult
  resultDescription: string;
};

class App extends React.Component<AppProps, AppState> {

  soundService: SoundService;
  pianoService: PianoService;
  quizService: QuizService;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      mode: PianoMode.Play,
      keyId: 0,
      quizCorrect: 0,
      quizIncorrect: 0,
      quizLength: 16,
      quizStatus: QuizStatus.None,
      resultDescription: ""
    };

    // This binding is necessary to make `this` work in the callback
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNotePress = this.handleNotePress.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
    this.onTryAgainClick = this.onTryAgainClick.bind(this);

    this.soundService = new SoundService();
    this.pianoService = new PianoService();
    this.quizService = new QuizService();
  }

  handleModeChange(mode: PianoMode) {
    this.setState({ mode, note: undefined, alternateNote: undefined });

    if(mode === PianoMode.Quiz) {
      this.setState({ quizCorrect: 0, quizIncorrect: 0, quizLength: 16, quizStatus: QuizStatus.Starting });
    }

  }

  handleKeyPress(keyId: number) {

    if (this.state.mode === PianoMode.Play) {
      const note = this.pianoService.getNoteByKeyId(keyId);
      const alternateNote = this.pianoService.getAlternateNote(note.noteId);

      this.setState({ keyId, note: note, alternateNote: alternateNote });

      this.soundService.playNote(keyId);
    }
    else {
      this.soundService.playNote(keyId);

      // Update the quiz in progress
      if(this.quizService.inProgress) {
        const currentQuizNote = this.pianoService.getNote( this.quizService.getCurrentNoteId() );
        const result = this.quizService.recordResult(keyId, currentQuizNote);

        this.setState({ quizCorrect: this.quizService.correct, quizIncorrect: this.quizService.incorrect, quizResult: result });

        if(this.quizService.next()) {
          const nextQuizNote = this.pianoService.getNote( this.quizService.getCurrentNoteId() );
          this.setState({ note: nextQuizNote });
        }
        else {
          // Finish Quiz
          let resultDescription: string = "";
          if(this.quizService.correct === this.state.quizLength) {
            resultDescription = "Perfect score, awesome!";
          }
          else if(this.quizService.correct > (this.state.quizLength * 0.8)) {
            resultDescription = "Great score, well done!";
          }
          else if(this.quizService.correct  > (this.state.quizLength * 0.6)) {
            resultDescription = "Good score!";
          }
          else if(this.quizService.correct  > (this.state.quizLength * 0.4)) {
            resultDescription = "Not bad, keep trying.";
          }
          else {
            resultDescription = "Looks like you need more practice.";
          }

          this.setState({ note: undefined, alternateNote: undefined, quizStatus: QuizStatus.Finished, resultDescription});

        }
      }
    }

  }

  handleNotePress(note: PianoNote) {
    const alternateNote = this.pianoService.getAlternateNote(note.noteId);

    this.setState({ keyId: note.keyId, note: note, alternateNote: alternateNote });

    this.soundService.playNote(note.keyId);
  }

  onStartClick(level: string) {
    let notes: string[] = [];
    if (level === 'easy') {
      notes = this.pianoService.getAllNaturalNoteIds(3,4); // middle 2 octaves only!
    }
    else if (level === 'medium') {
      notes = this.pianoService.getAllNaturalNoteIds();
    }
    else {
      // hard level
      notes = this.pianoService.getAllNoteIds();
    }

    this.quizService.startQuiz(this.state.quizLength, notes);
    const currentQuizNote = this.pianoService.getNote( this.quizService.getCurrentNoteId() );

    this.setState({ note: currentQuizNote, quizStatus: QuizStatus.InProgress, quizCorrect: this.quizService.correct, quizIncorrect: this.quizService.incorrect });
  }

  onTryAgainClick() {
    this.setState({ quizCorrect: 0, quizIncorrect: 0, quizLength: 16, quizStatus: QuizStatus.Starting });
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
              <QuizInfo
                status={this.state.quizStatus}
                correct={this.state.quizCorrect}
                incorrect={this.state.quizIncorrect}
                total={this.state.quizLength}
                description={this.state.resultDescription}
                result={this.state.quizResult}
                onStartClick={this.onStartClick}
                onTryAgainClick={this.onTryAgainClick}
                />
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
