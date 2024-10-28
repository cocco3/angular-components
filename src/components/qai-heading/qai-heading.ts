import { Component, HostBinding, Input } from '@angular/core';

export const QaiHeadingSizes = ['small', 'medium', 'large'];
export type QaiHeadingSize = (typeof QaiHeadingSizes)[number];

/**
 * Use this component by adding the `[qai-heading]` attribute
 *  on any heading element (h1–h6).
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiHeading',
  selector: `
    h1[qai-heading], h2[qai-heading], h3[qai-heading],
    h4[qai-heading], h5[qai-heading], h6[qai-heading]
  `,
  standalone: true,
  styleUrls: ['./qai-heading.css'],
  template: `<ng-content />`,
})
export class QaiHeading {
  @Input({ required: true }) size!: QaiHeadingSize;

  @HostBinding('class')
  get cssClass() {
    return {
      [`size-${this.size}`]: !!this.size,
    };
  }
}
