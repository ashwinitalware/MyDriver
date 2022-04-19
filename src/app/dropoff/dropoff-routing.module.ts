import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DropoffPage } from './dropoff.page';

const routes: Routes = [
  {
    path: '',
    component: DropoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropoffPageRoutingModule {}
