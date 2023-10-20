import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectorServiceService } from '../services/sector-service.service';
import { ModalController } from '@ionic/angular';
import { SectorDialogComponent } from "../sector-dialog/sector-dialog.component";

@Component({
  selector: 'app-sectors-page',
  templateUrl: './sectors-page.page.html',
  styleUrls: ['./sectors-page.page.scss'],
})
export class SectorsPagePage implements OnInit {
  sectors: any = [];

  

  constructor(
    private sectorService: SectorServiceService,
    private router: Router,
    private modalController: ModalController
  ) { }

  gotoHome(){
    this.router.navigateByUrl("/");
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getAllSectors();
  }

  getAllSectors() {
    this.sectorService.getAllSectors().subscribe(sectors => {
      console.log(sectors);
      this.sectors = sectors;
    });
  }

  async addSector() {
    const modal = await this.modalController.create({
      component: SectorDialogComponent,
      componentProps: {
        mode: 'add',
        sectorId: null,
      },
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data && data.data.reload) {
        this.getAllSectors();
      }
    });

    return await modal.present();
  }

  async editSector(id: number) {
    const modal = await this.modalController.create({
      component: SectorDialogComponent,
      componentProps: {
        mode: 'edit',
        sectorId: id,
      },
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data && data.data.reload) {
        this.getAllSectors();
      }
    });

    return await modal.present();
  }

  deleteSector(id: number) {
      this.sectorService.deleteSector(id).subscribe(() => {
        this.getAllSectors();
      });
  }

  gotoworkers(){
    this.router.navigateByUrl("/workers-page");
  }
}
