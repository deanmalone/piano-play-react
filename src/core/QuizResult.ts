import { PianoNote }  from './PianoNote';
import { Result }  from '././enums';

export class QuizResult {

  result: Result

  constructor(readonly actualNote: PianoNote, readonly selectedKeyId: number, readonly quizNumber: number) {
    this.result = (this.selectedKeyId === this.actualNote.keyId) ? Result.Correct : Result.Incorrect;
  }

}
