import { Component, Directive, HostBinding, Input } from '@angular/core';

export const UiButtonKinds = ['primary', 'secondary'];
export type UiButtonKind = (typeof UiButtonKinds)[number];

export const UiButtonSizes = ['small', 'medium'];
export type UiButtonSize = (typeof UiButtonSizes)[number];

@Directive()
class UiButtonBase {
  @Input({ required: true }) kind!: UiButtonKind;
  @Input({ required: true }) size!: UiButtonSize;

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
      [`size-${this.size}`]: !!this.size,
    };
  }
}

@Component({
  standalone: true,
  selector: 'button[ui-button]',
  templateUrl: './ui-button.html',
  styleUrls: ['./ui-button.css'],
  exportAs: 'uiButton',
})
export class UiButton extends UiButtonBase {}

@Component({
  standalone: true,
  selector: 'a[ui-button]',
  templateUrl: './ui-button.html',
  styleUrls: ['./ui-button.css'],
  exportAs: 'uiButtonAnchor',
})
export class UiButtonAnchor extends UiButtonBase {}
