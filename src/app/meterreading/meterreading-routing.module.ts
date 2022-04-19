import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterreadingPage } from './meterreading.page';

const routes: Routes = [
  {
    path: '',
    component: MeterreadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeterreadingPageRoutingModule {}
