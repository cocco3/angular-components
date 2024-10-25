import { Component, HostBinding, Input } from '@angular/core';

export const QaiBadgeKinds = ['gray', 'red', 'yellow', 'green'];
export type QaiBadgeKind = (typeof QaiBadgeKinds)[number];

export const QaiBadgeSizes = ['small', 'medium', 'large'];
export type QaiBadgeSize = (typeof QaiBadgeSizes)[number];

@Component({
  standalone: true,
  selector: `qai-badge`,
  templateUrl: './qai-badge.html',
  styleUrls: ['./qai-badge.css'],
  exportAs: 'qaiBadge',
})
export class QaiBadge {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) size!: QaiBadgeSize;
  @Input({ required: true }) kind!: QaiBadgeKind;

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
      [`size-${this.size}`]: !!this.size,
    };
  }
}
