import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { outletNamingRoutes } from './outlet-naming.routes';
import { OutletNamingComponent } from './outlet-naming.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [OutletNamingComponent, CompAComponent, CompBComponent],
  imports: [CommonModule, RouterModule.forChild(outletNamingRoutes)],
})
export class OutletNamingModule {}
