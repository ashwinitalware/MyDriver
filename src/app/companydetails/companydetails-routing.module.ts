import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanydetailsPage } from './companydetails.page';

const routes: Routes = [
  {
    path: '',
    component: CompanydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanydetailsPageRoutingModule {}
