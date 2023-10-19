import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SectorsPagePageRoutingModule } from './sectors-page-routing.module';
import { SectorsPagePage } from './sectors-page.page';
import { SectorDialogComponent } from '../sector-dialog/sector-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SectorsPagePageRoutingModule
  ],
  declarations: [SectorsPagePage, SectorDialogComponent],
})
export class SectorsPagePageModule {}
