import { Component, HostBinding, Input } from '@angular/core';

export const UiHeadingSizes = ['small', 'medium', 'large'];
export type UiHeadingSize = (typeof UiHeadingSizes)[number];

@Component({
  standalone: true,
  selector: 'h1[ui-heading]:is(h1, h2, h3, h4, h5, h6)',
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
