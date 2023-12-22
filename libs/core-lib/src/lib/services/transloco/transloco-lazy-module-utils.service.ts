import { ValueProvider } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

interface TranslocoInlineLoader {
  [key: string]: Function;
}

export class TranslocoLazyModuleUtils {
  private static createInlineLoader(
    languages: Array<string>
  ): TranslocoInlineLoader {
    const translocoInlineLoader: TranslocoInlineLoader = {};

    languages.forEach((language) => {
      translocoInlineLoader[language] = () =>
        import(`../i18n/${language}.json`);
    });

    return translocoInlineLoader;
  }

  public static getScopeProvider(
    scope: string,
    languages: Array<string>
  ): ValueProvider {
    return {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: scope,
        alias: 'message',
        loader: this.createInlineLoader(languages),
      },
    };
  }
}
