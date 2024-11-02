import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaiIcon, QaiIconKind } from '../qai-icon';
import { QaiBadge, type QaiBadgeKind } from '../qai-badge';
import { QaiButtonAnchor } from '../qai-button';

type Badges = {
  icon?: QaiIconKind | undefined;
  kind: QaiBadgeKind;
  label: string;
};

@Component({
  exportAs: 'assignmentCard',
  imports: [CommonModule, QaiBadge, QaiButtonAnchor, QaiIcon],
  selector: 'assignment-card',
  standalone: true,
  styleUrls: ['./assignment-card.css'],
  template: `
    <div class="badges" *ngIf="!!badges?.length">
      <ng-container *ngFor="let badge of badges">
        <qai-badge [kind]="badge.kind" [label]="badge.label" shape="rectangle">
          <qai-icon *ngIf="!!badge.icon" [kind]="badge.icon" positionStart />
        </qai-badge>
      </ng-container>
    </div>
    <div class="text">{{ title }}</div>
    <div class="action">
      <a
        qai-button
        [href]="assignmentUrl"
        size="medium"
        kind="primary"
        [attr.aria-label]="buttonTitle"
      >
        View assignment
      </a>
    </div>
  `,
})
export class AssignmentCard {
  @Input({ required: true }) title!: string;
  @Input() badges?: Badges[] = [];
  @Input({ required: true }) assignmentUrl!: string;

  get buttonTitle() {
    return `View assignment for ${this.title}`;
  }
}
