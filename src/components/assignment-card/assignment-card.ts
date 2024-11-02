import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaiIcon, QaiIconKind } from '../qai-icon';
import { QaiBadge, type QaiBadgeKind } from '../qai-badge';
import { QaiButton } from '../qai-button';

type Badges = {
  icon?: QaiIconKind | undefined;
  kind: QaiBadgeKind;
  label: string;
};

@Component({
  exportAs: 'assignmentCard',
  imports: [CommonModule, QaiBadge, QaiButton, QaiIcon],
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
      <button
        qai-button
        size="medium"
        kind="primary"
        [attr.aria-label]="buttonTitle"
      >
        View assignment
      </button>
    </div>
  `,
})
export class AssignmentCard {
  @Input({ required: true }) title!: string;
  @Input() badges?: Badges[] = [];

  get buttonTitle() {
    return `View assignment for ${this.title}`;
  }
}
