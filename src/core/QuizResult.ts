import { PianoNote }  from './PianoNote';

export class QuizResult {

  constructor(readonly actualNote: PianoNote, readonly selectedKeyId: number, readonly quizNumber: number) {
  }

  isCorrect(): boolean
  {
    return (this.selectedKeyId === this.actualNote.keyId);
  }

}
