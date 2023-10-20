import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateWorkersPageRoutingModule } from './update-workers-routing.module';

import { UpdateWorkersPage } from './update-workers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateWorkersPageRoutingModule
  ],
  declarations: [UpdateWorkersPage]
})
export class UpdateWorkersPageModule {}
