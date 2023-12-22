import { SvgHttpLoader, SvgLoader } from 'angular-svg-icon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export class SvgBrowserLoader implements SvgLoader {
  constructor(private http: HttpClient) {}
  getSvg(url: string): Observable<string> {
    const cleanedPath = url.startsWith('./') ? url.substring(2) : url;
    const baseUrl = 'http://localhost:4201';
    return new SvgHttpLoader(this.http).getSvg(`${baseUrl}/${cleanedPath}`);
  }
}
