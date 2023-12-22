import { ElementRef, Renderer2 } from '@angular/core';

export class BaseAbsoluteSrcDirective {
  constructor(protected el: ElementRef, protected renderer: Renderer2) {}

  protected calculateAbsolutePath(relativePath: string): string {
    const cleanedPath = relativePath.startsWith('./')
      ? relativePath.substring(2)
      : relativePath;
    const baseUrl = 'http://localhost:4201'; // Ajusta la URL base según tu configuración
    console.info('class absolute path', `${baseUrl}/${cleanedPath}`);
    return `${baseUrl}/${cleanedPath}`;
  }

  protected setAbsoluteSrc(relativePath: string): void {
    const absolutePath = this.calculateAbsolutePath(relativePath);
    this.renderer.setAttribute(this.el.nativeElement, 'src', absolutePath);
  }
}
