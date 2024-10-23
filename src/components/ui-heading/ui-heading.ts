import { Component, HostBinding, Input } from '@angular/core';

export const UiHeadingSizes = ['small', 'medium', 'large'];
export type UiHeadingSize = (typeof UiHeadingSizes)[number];

@Component({
  standalone: true,
  selector: 'h1[ui-heading], h2[ui-heading]',
  templateUrl: './ui-heading.html',
  styleUrls: ['./ui-heading.css'],
  exportAs: 'uiHeading',
})
export class UiHeading {
  /** Size of heading */
  @Input({ required: true }) size!: UiHeadingSize;

  @HostBinding('class')
  get cssClass() {
    return {
      [`size-${this.size}`]: !!this.size,
    };
  }
}
