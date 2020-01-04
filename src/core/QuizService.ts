import { PianoNote } from './PianoNote';
import { QuizResult } from './QuizResult';
import { QuizStatus, Result } from './enums';

export class QuizService {

  private quizLength = 16;
  private quizNotes: string[] = [];
  private quizResults: QuizResult[] = [];
  private quizIndex = 0;

  inProgress: boolean = false;
  correct: number = 0;
  incorrect: number = 0;
  status: QuizStatus = QuizStatus.None;

  startQuiz(quizLength: number, availableNotes: string[]) {

    this.quizLength = quizLength;

    // clear quiz data
    this.quizNotes.length = 0;
    this.quizResults.length = 0;

    this.inProgress = true;
    this.quizIndex = 0;
    this.correct = 0;
    this.incorrect = 0;

    // generate random notes from the availableNotes array
    for(let i=0;i<this.quizLength;i++) {
      this.quizNotes.push( availableNotes[Math.floor(Math.random() * availableNotes.length)] );
    }
  }

  getCurrentIndex() {
    return this.quizIndex;
  }

  getCurrentNoteId() {
    return this.quizNotes[this.quizIndex];
  }

  next() : boolean {

    // check if quiz has finished
    if(this.quizIndex === (this.quizLength - 1)) {
      this.inProgress = false;
      return false;
    }

    // otherwise move on to next quiz note.
    this.quizIndex++;
    return true;
  }

  recordResult(selectedKeyId:number, actualNote: PianoNote) : QuizResult {

    const result = new QuizResult(actualNote, selectedKeyId, this.quizIndex + 1);

    (result.result === Result.Correct) ? this.correct++ : this.incorrect++;

    this.quizResults.push(result);

    return result;

  }

}
