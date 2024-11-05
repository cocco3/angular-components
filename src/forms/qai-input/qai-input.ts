import { booleanAttribute, Component, Input } from '@angular/core';

export const QaiInputTypes = ['text', 'password', 'email', 'date'];
export type QaiInputType = (typeof QaiInputTypes)[number];

/**
 * Use this component by adding the `[qai-input]` attribute
 *  on any input element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiInput',
  host: {
    '[id]': 'id',
    '[name]': 'name',
    '[disabled]': 'disabled',
    '[readonly]': 'readonly',
    '[type]': 'type',
    '[value]': 'value',
  },
  selector: 'input[qai-input]',
  standalone: true,
  styleUrls: ['./qai-input.css'],
  template: '',
})
export class QaiInput {
  @Input({ transform: booleanAttribute }) disabled? = false;
  @Input() id?: string;
  @Input() name?: string;
  @Input({ transform: booleanAttribute }) readonly? = false;
  @Input() type?: QaiInputType = 'text';
  @Input({ required: true }) value!: string;
}
