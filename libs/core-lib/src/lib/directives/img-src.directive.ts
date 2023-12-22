import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseAbsoluteSrcDirective } from './base-absolute-src-directive.class';

@Directive({
  selector: 'img[src]',
})
export class ImgAbsoluteSrcDirective extends BaseAbsoluteSrcDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    const relativePath = el.nativeElement.getAttribute('src');
    if (relativePath) {
      this.setAbsoluteSrc(relativePath);
    }
  }
}
