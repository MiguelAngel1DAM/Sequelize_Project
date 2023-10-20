import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../services/photoservice.service';
import { WorkerService } from '../services/workers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-workers',
  templateUrl: './add-workers.page.html',
  styleUrls: ['./add-workers.page.scss'],
})
export class AddWorkersPage implements OnInit {
  workerForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  blob: File | undefined;   

  constructor(
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private workerService: WorkerService
  ) {
    this.workerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      sector: ['', [Validators.required]]
    });
  }

  ionViewWillEnter() {
    this.workerForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
    this.blob = undefined;
  }

  ngOnInit() {
  }

  get errorControl() {
    return this.workerForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath!;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
    this.blob = undefined;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.workerForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      if (this.capturedPhoto !== "") {
        const response = await fetch(this.capturedPhoto);
        this.blob = new File([await response.blob()], 'photo.jpg');
      }

      this.workerService.createWorker(this.workerForm.value, this.blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/workers-page");
      })

    }
    return true;
  }
}
