import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkersPagePageRoutingModule } from './workers-page-routing.module';

import { WorkersPagePage } from './workers-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkersPagePageRoutingModule
  ],
  declarations: [WorkersPagePage]
})
export class WorkersPagePageModule {}
