import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanydetailsPageRoutingModule } from './companydetails-routing.module';

import { CompanydetailsPage } from './companydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanydetailsPageRoutingModule
  ],
  declarations: [CompanydetailsPage]
})
export class CompanydetailsPageModule {}
