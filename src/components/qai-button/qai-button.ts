import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  Component,
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

export const QaiButtonKinds = ['primary', 'secondary'];
export type QaiButtonKind = (typeof QaiButtonKinds)[number];

export const QaiButtonSizes = ['small', 'medium'];
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
  standalone: true,
  imports: [CommonModule],
  selector: 'button[qai-button]',
  templateUrl: './qai-button.html',
  styleUrls: ['./qai-button.css'],
  exportAs: 'qaiButton',
  host: {
    '[disabled]': 'disabled',
  },
})
export class QaiButton extends QaiButtonBase {
  @Input({ transform: booleanAttribute }) disabled? = false;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'a[qai-button]',
  templateUrl: './qai-button.html',
  styleUrls: ['./qai-button.css'],
  exportAs: 'uiButtonAnchor',
})
export class QaiButtonAnchor extends QaiButtonBase {}
