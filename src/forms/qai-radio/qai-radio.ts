import { booleanAttribute, Component, Input } from '@angular/core';

/**
 * Use this component by adding the `[qai-radio]` attribute
 *  on any input[type=radio] element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiRadio',
  host: {
    '[checked]': 'checked',
    '[disabled]': 'disabled',
    '[id]': 'id',
    '[name]': 'name',
    type: 'radio',
    '[value]': 'value',
  },
  selector: `input[qai-radio][type="radio"]`,
  standalone: true,
  styleUrls: ['./qai-radio.css'],
  template: '',
})
export class QaiRadio {
  @Input({ transform: booleanAttribute }) checked? = false;
  @Input({ transform: booleanAttribute }) disabled? = false;
  @Input() id?: string;
  @Input() name?: string;
  @Input({ required: true }) value!: string;
}
