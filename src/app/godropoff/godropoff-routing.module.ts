import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodropoffPage } from './godropoff.page';

const routes: Routes = [
  {
    path: '',
    component: GodropoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodropoffPageRoutingModule {}
