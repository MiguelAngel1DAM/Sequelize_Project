import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWorkersPageRoutingModule } from './add-workers-routing.module';

import { AddWorkersPage } from './add-workers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    IonicModule,
    AddWorkersPageRoutingModule
  ],
  declarations: [AddWorkersPage]
})
export class AddWorkersPageModule {}
