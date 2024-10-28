import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

import { svgIconStore } from '../../foundations/icons/svgIconStore';

export const QaiIconKinds = Object.keys(svgIconStore);
export type QaiIconKind = keyof typeof svgIconStore;

const getSvgForName = (name: QaiIconKind): string => {
  return svgIconStore[name];
};

@Component({
  exportAs: 'qaiIcon',
  selector: 'qai-icon',
  standalone: true,
  styleUrls: ['./qai-icon.css'],
  template: `<span [innerHTML]="svg" [style.height]="size" [style.width]="size">
  </span>`,
})
export class QaiIcon {
  @Input({ required: true }) kind!: QaiIconKind;
  @Input({ required: true }) size = '24px';

  protected get svg(): SafeHtml {
    const svgContent = getSvgForName(this.kind);
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  constructor(private sanitizer: DomSanitizer) {}

  @HostBinding('class')
  get cssClass() {
    return {
      [`kind-${this.kind}`]: !!this.kind,
    };
  }
}
