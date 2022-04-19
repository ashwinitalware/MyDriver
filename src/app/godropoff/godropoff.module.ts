import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodropoffPageRoutingModule } from './godropoff-routing.module';

import { GodropoffPage } from './godropoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodropoffPageRoutingModule
  ],
  declarations: [GodropoffPage]
})
export class GodropoffPageModule {}
