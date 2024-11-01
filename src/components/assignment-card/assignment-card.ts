import { Component, Input } from '@angular/core';

@Component({
  exportAs: 'assignmentCard',
  selector: 'assignment-card',
  standalone: true,
  styleUrls: ['./assignment-card.css'],
  template: `
    <div><ng-content select="[badges]" /></div>
    <span class="text">{{ title }}</span>
    <ng-content select="[action]" />
  `,
})
export class AssignmentCard {
  @Input({ required: true }) title!: string;
}
