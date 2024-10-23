import { Component, HostBinding, Input } from '@angular/core';

export const UiHeadingSizes = ['small', 'medium', 'large'];
export type UiHeadingSize = (typeof UiHeadingSizes)[number];

/**
 * Use this component by adding the `[ui-heading]` attribute
 *  on any heading element (h1–h6).
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  standalone: true,
  selector: `
    h1[ui-heading], h2[ui-heading], h3[ui-heading],
    h4[ui-heading], h5[ui-heading], h6[ui-heading]
  `,
  templateUrl: './ui-heading.html',
  styleUrls: ['./ui-heading.css'],
  exportAs: 'uiHeading',
})
export class UiHeading {
  @Input({ required: true }) size!: UiHeadingSize;

  @HostBinding('class')
  get cssClass() {
    return {
      [`size-${this.size}`]: !!this.size,
    };
  }
}
