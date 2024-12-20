import { Component } from '@angular/core';

/**
 * Use this component by adding the `[qai-select]` attribute
 *  on any select element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiSelect',
  selector: `select[qai-select]`,
  standalone: true,
  styleUrls: ['./qai-select.css'],
  template: '<ng-content />',
})
export class QaiSelect {}
