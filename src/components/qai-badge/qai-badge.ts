import { Component, HostBinding, Input } from '@angular/core';

export const QaiBadgeKinds = ['gray', 'red', 'yellow', 'green'];
export type QaiBadgeKind = (typeof QaiBadgeKinds)[number];

export const QaiBadgeShapes = ['round', 'rectangle'];
export type QaiBadgeShape = (typeof QaiBadgeShapes)[number];

export const QaiBadgeSizes = ['small', 'medium', 'large'];
export type QaiBadgeSize = (typeof QaiBadgeSizes)[number];

@Component({
  standalone: true,
  selector: 'qai-badge',
  template: `{{ label }}`,
  styleUrls: ['./qai-badge.css'],
  exportAs: 'qaiBadge',
})
export class QaiBadge {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) shape!: QaiBadgeShape;
  @Input({ required: true }) size!: QaiBadgeSize;
  @Input({ required: true }) kind!: QaiBadgeKind;

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
      [`shape-${this.shape}`]: !!this.shape,
      [`size-${this.size}`]: !!this.size,
    };
  }
}
