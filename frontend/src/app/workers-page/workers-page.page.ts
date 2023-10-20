import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../services/workers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers-page',
  templateUrl: './workers-page.page.html',
  styleUrls: ['./workers-page.page.scss'],
})
export class WorkersPagePage implements OnInit {
  workers: { id: number, name: string, sector: string, logo: string }[] = [];
  image: string = './assets/images/'

  constructor(private workerService: WorkerService, private router: Router) { }

  ngOnInit() { 
    this.loadWorkers();
  }

  loadWorkers() {
    this.workerService.getWorkers().subscribe((data: any) => {
      this.workers = data;
    });
  }

  gotoworker() {
    this.router.navigateByUrl("/add-workers");
  }

  deleteWorker(id: number) {
    this.workerService.deleteWorker(id).subscribe(() => {
        this.loadWorkers();
      });
    }

  goToUpdateWorker(id: number) {
    this.router.navigateByUrl(`/update-worker/${id}`);
  }
}
