import { booleanAttribute, Component, Input } from '@angular/core';

/**
 * Use this component by adding the `[qai-textarea]` attribute
 *  on any textarea element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiTextarea',
  selector: 'textarea[qai-textarea]',
  standalone: true,
  styleUrls: ['./qai-textarea.css'],
  template: '',
})
export class QaiTextarea {}
