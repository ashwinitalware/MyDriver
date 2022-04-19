import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DropoffPageRoutingModule } from './dropoff-routing.module';

import { DropoffPage } from './dropoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropoffPageRoutingModule
  ],
  declarations: [DropoffPage]
})
export class DropoffPageModule {}
