import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../services/photoservice.service';
import { WorkerService } from '../services/workers-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-workers',
  templateUrl: './update-workers.page.html',
  styleUrls: ['./update-workers.page.scss'],
})
export class UpdateWorkersPage implements OnInit {
  workerForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = '';
  blob: File | undefined;
  workerId: number | undefined;

  constructor(
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private workerService: WorkerService,
    private route: ActivatedRoute
  ) {
    this.workerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      sector: ['', [Validators.required]],
    });

    this.route.params.subscribe((params) => {
      this.workerId = +params['id']; // Obtén el ID del trabajador a actualizar desde la URL
    });
  }

  ionViewWillEnter() {
    this.workerForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = '';
    this.blob = undefined;

    if (this.workerId) {
      this.loadWorkerForEditing(this.workerId);
    }
  }

  loadWorkerForEditing(id: number) {
    this.workerService.getOneWorker(id).subscribe((data: any) => {
      if (data) {
        this.workerForm.patchValue({
          name: data.name,
          sector: data.sector,
        });
        this.capturedPhoto = data.photoUrl;
      }
    });
  }
  

  get errorControl() {
    return this.workerForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then((data) => {
      this.capturedPhoto = data.webPath!;
    });
  }

  pickImage() {
    this.photoService.pickImage().then((data) => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = '';
    this.blob = undefined;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.workerForm.valid) {
      console.log('Por favor, proporciona todos los valores requeridos.');
      return false;
    } else {
      if (this.capturedPhoto !== '') {
        const response = await fetch(this.capturedPhoto);
        this.blob = new File([await response.blob()], 'photo.jpg');
      }

      if (this.workerId) {
        this.workerService.updateWorker(this.workerId, this.workerForm.value, this.blob).subscribe((data) => {
          console.log('¡Trabajador actualizado!');
          this.router.navigateByUrl("/workers-page");
        });
      }
    }
    return true;
  }

  ngOnInit() {}
}
