import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DropPage } from './drop.page';

const routes: Routes = [
  {
    path: '',
    component: DropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropPageRoutingModule {}
