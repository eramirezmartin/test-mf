import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from '@test-mf/core-lib';
import { HttpClientModule } from '@angular/common/http';
import { OutletNamingModule } from './outlet-naming/outlet-naming.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    DialogModule,
    HttpClientModule,
    TranslocoRootModule,
    OutletNamingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
