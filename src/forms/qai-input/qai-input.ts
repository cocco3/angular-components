import { Component } from '@angular/core';

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
  selector: `input[qai-input]`,
  standalone: true,
  styleUrls: ['./qai-input.css'],
  template: '',
})
export class QaiInput {}
