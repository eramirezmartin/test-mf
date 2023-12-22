import { Component } from '@angular/core';
import {
  DialogCloseResult,
  DialogService,
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'test-mf-remote-app-1-entry',
  template: `<h1>{{ 'HELLO' | transloco }}</h1>
    <h2>
      Soy Remote 1
      <svg-icon src="./assets/icon-afternoon.svg"></svg-icon>
    </h2>
    <div class="example-wrapper">
      <div class="example-config" *ngIf="result">
        Dialog result: {{ result }}
      </div>
      <button kendoButton (click)="showConfirmation()">Please confirm</button>
    </div>

    <div kendoDialogContainer></div>
    <test-mf-nx-welcome></test-mf-nx-welcome>`,
})
export class RemoteEntryComponent {
  result: any;
  constructor(private dialogService: DialogService) {}

  public showConfirmation(): void {
    const dialog = this.dialogService.open({
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [{ text: 'No' }, { text: 'Yes', themeColor: 'primary' }],
      width: 450,
      height: 200,
      minWidth: 250,
    });

    dialog.result.subscribe((result: any) => {
      if (result instanceof DialogCloseResult) {
        console.log('close');
      } else {
        console.log('action', result);
      }

      this.result = JSON.stringify(result);
    });
  }
}
