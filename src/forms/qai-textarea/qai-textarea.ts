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
  host: {
    '[disabled]': 'disabled',
    '[attr.id]': 'id',
    '[attr.name]': 'name',
  },
  selector: 'textarea[qai-textarea]',
  standalone: true,
  styleUrls: ['./qai-textarea.css'],
  template: '',
})
export class QaiTextarea {
  @Input({ transform: booleanAttribute }) disabled? = false;
  @Input() id?: string;
  @Input() name?: string;
}
