import {
  provideTransloco,
  TranslocoModule,
  TranslocoService,
} from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';

import { TranslocoHttpLoader } from './transloco-http-loader.service';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    TranslocoService,
    provideTransloco({
      config: {
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
