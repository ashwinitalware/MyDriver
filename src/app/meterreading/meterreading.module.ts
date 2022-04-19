import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeterreadingPageRoutingModule } from './meterreading-routing.module';

import { MeterreadingPage } from './meterreading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeterreadingPageRoutingModule
  ],
  declarations: [MeterreadingPage]
})
export class MeterreadingPageModule {}
