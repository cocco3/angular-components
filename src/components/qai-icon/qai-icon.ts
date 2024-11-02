import { Component, Input } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

import { svgIconStore } from '../../foundations/icons/svgIconStore';

export const QaiIconKinds = Object.keys(svgIconStore);
export type QaiIconKind = keyof typeof svgIconStore;

const getSvgForName = (name: QaiIconKind): string => {
  return svgIconStore[name];
};

@Component({
  exportAs: 'qaiIcon',
  host: {
    '[innerHTML]': 'svg',
    '[style.height]': 'size',
    '[style.width]': 'size',
  },
  selector: 'qai-icon',
  standalone: true,
  styleUrls: ['./qai-icon.css'],
  template: '',
})
export class QaiIcon {
  @Input({ required: true }) kind!: QaiIconKind;

  /** Any valid CSS size value. */
  @Input() size?: string;

  protected get svg(): SafeHtml {
    const svgContent = getSvgForName(this.kind);
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  constructor(private sanitizer: DomSanitizer) {}
}
