import { Component, HostBinding, Input } from '@angular/core';

export const ScoreSquareKinds = ['pass', 'fail'];
export type ScoreSquareKind = (typeof ScoreSquareKinds)[number];

@Component({
  exportAs: 'scoreSquare',
  selector: 'score-square',
  standalone: true,
  styleUrls: ['./score-square.css'],
  templateUrl: './score-square.html',
})
export class ScoreSquare {
  @Input({ required: true }) score = 0;
  @Input({ required: true }) max = 0;
  @Input({ required: true }) kind!: ScoreSquareKind;

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
    };
  }
}
