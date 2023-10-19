import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SectorServiceService } from '../services/sector-service.service';

@Component({
 selector: 'app-sector-dialog',
 templateUrl: './sector-dialog.component.html',
 styleUrls: ['./sector-dialog.component.scss'],
})
export class SectorDialogComponent implements OnInit {
 @Input() mode: 'add' | 'edit' = 'add';
 @Input() sectorId: number | null = null;
 sectorName: string = '';

 constructor(
   private modalController: ModalController,
   private sectorService: SectorServiceService
 ) {}

 ngOnInit() {
   if (this.mode === 'edit' && this.sectorId) {
     this.sectorService.getSectorDetails(this.sectorId).subscribe((sectorDetails) => {
       this.sectorName = sectorDetails.name;
     });
   }
 }

 saveSector() {
  if (this.mode === 'add') {
    const newSector = { name: this.sectorName };
    this.sectorService.createSector(newSector).subscribe(
      (response) => {
        this.closeDialog(true);
      },
      (error) => {
        console.error('Error al añadir el sector:', error);
      }
    );
  } else if (this.mode === 'edit' && this.sectorId) {
    const updatedSector = { name: this.sectorName };
    this.sectorService.updateSector(this.sectorId, updatedSector).subscribe(
      (response) => {
        this.closeDialog(true);
      },
      (error) => {
        console.error('Error al actualizar el sector:', error);
      }
    );
  }
}

 closeDialog(reload: boolean) {
   this.modalController.dismiss({ reload });
 }
}
