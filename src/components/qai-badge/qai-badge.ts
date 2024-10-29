import { Component, HostBinding, Input } from '@angular/core';

export const QaiBadgeKinds = ['gray', 'red', 'yellow', 'green'];
export type QaiBadgeKind = (typeof QaiBadgeKinds)[number];

export const QaiBadgeShapes = ['round', 'rectangle'];
export type QaiBadgeShape = (typeof QaiBadgeShapes)[number];

@Component({
  exportAs: 'qaiBadge',
  selector: 'qai-badge',
  standalone: true,
  styleUrls: ['./qai-badge.css'],
  template: `
    <ng-content select="[positionStart]" />
    <span class="text">{{ label }}</span>
    <ng-content select="[positionEnd]" />
  `,
})
export class QaiBadge {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) shape!: QaiBadgeShape;
  @Input({ required: true }) kind!: QaiBadgeKind;

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
      [`shape-${this.shape}`]: !!this.shape,
    };
  }
}
