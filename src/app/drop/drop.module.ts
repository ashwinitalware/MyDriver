import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DropPageRoutingModule } from './drop-routing.module';

import { DropPage } from './drop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropPageRoutingModule
  ],
  declarations: [DropPage]
})
export class DropPageModule {}
