import { booleanAttribute, Component, Input } from '@angular/core';

/**
 * Use this component by adding the `[qai-checkbox]` attribute
 *  on any input[type=checkbox] element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiCheckbox',
  host: {
    '[checked]': 'checked',
    '[disabled]': 'disabled',
    '[id]': 'id',
    '[name]': 'name',
    type: 'checkbox',
    '[value]': 'value',
  },
  selector: `input[qai-checkbox][type="checkbox"]`,
  standalone: true,
  styleUrls: ['./qai-checkbox.css'],
  template: '',
})
export class QaiCheckbox {
  @Input({ transform: booleanAttribute }) checked? = false;
  @Input({ transform: booleanAttribute }) disabled? = false;
  @Input() id?: string;
  @Input() name?: string;
  @Input({ required: true }) value!: string;
}
