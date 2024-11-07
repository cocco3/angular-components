import { booleanAttribute, Component, Input } from '@angular/core';

/**
 * Use this component by adding the `[qai-select]` attribute
 *  on any select element.
 *
 * Using an attribute instead of a custom element allows direct access
 *  to the native underlying element.
 */
@Component({
  exportAs: 'qaiSelect',
  host: {
    '[disabled]': 'disabled',
    '[attr.id]': 'id',
    '[attr.name]': 'name',
  },
  selector: `select[qai-select]`,
  standalone: true,
  styleUrls: ['./qai-select.css'],
  template: '<ng-content />',
})
export class QaiSelect {
  @Input({ transform: booleanAttribute }) disabled? = false;
  @Input() id?: string;
  @Input() name?: string;
}
