import {
  booleanAttribute,
  Component,
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

export const QaiButtonKinds = ['primary', 'secondary', 'tertiary'];
export type QaiButtonKind = (typeof QaiButtonKinds)[number];

export const QaiButtonSizes = ['small', 'medium', 'large'];
export type QaiButtonSize = (typeof QaiButtonSizes)[number];

@Directive()
class QaiButtonBase {
  @Input({ required: true }) kind!: QaiButtonKind;
  @Input({ required: true }) size!: QaiButtonSize;

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
      [`size-${this.size}`]: !!this.size,
    };
  }
}

/**
 * Use this component by adding the `[qai-button]` attribute
 *  on any button element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiButton',
  host: {
    '[disabled]': 'disabled',
  },
  selector: 'button[qai-button]',
  standalone: true,
  styleUrls: ['./qai-button.css'],
  templateUrl: './qai-button.html',
})
export class QaiButton extends QaiButtonBase {
  @Input({ transform: booleanAttribute }) disabled? = false;
}

@Component({
  exportAs: 'uiButtonAnchor',
  selector: 'a[qai-button]',
  standalone: true,
  styleUrls: ['./qai-button.css'],
  templateUrl: './qai-button.html',
})
export class QaiButtonAnchor extends QaiButtonBase {}
