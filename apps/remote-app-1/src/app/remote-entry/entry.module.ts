import { NgModule, TransferState } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ImgAbsoluteSrcDirective,
  SvgIconAbsoluteSrcDirective,
  SvgBrowserLoader,
  TranslocoRootModule,
} from '@test-mf/core-lib';
import {
  provideTranslocoLoader,
  provideTranslocoScope,
} from '@ngneat/transloco';
import { provideTranslocoConfig } from '@ngneat/transloco/lib/transloco.providers';
import { TranslocoHttpLoader } from './transloco-http-loader.service';

export function svgLoaderFactory(http: HttpClient) {
  return new SvgBrowserLoader(http);
}
@NgModule({
  declarations: [
    RemoteEntryComponent,
    NxWelcomeComponent,
    SvgIconAbsoluteSrcDirective,
    ImgAbsoluteSrcDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    DialogsModule,
    HttpClientModule,
    TranslocoRootModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useFactory: svgLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideTranslocoLoader(TranslocoHttpLoader)],
})
export class RemoteEntryModule {}
