import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  endPoint = "http://localhost:8080/api/workers";

  constructor(private httpClient: HttpClient) { }

  getWorkers(){
    return this.httpClient.get(this.endPoint)
  }

  createWorker(worker: { name: string | Blob; sector: string | Blob; }, blob: any){
    const formData = new FormData();
    formData.append("name", worker.name);
    formData.append("sector", worker.sector);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  getOneWorker(id: number){
    const url = `${this.endPoint}/${id}`;
    return this.httpClient.get(url)
  }

  updateWorker(id: number, worker: { name: string, sector: string }, image?: File) {
    const url = `${this.endPoint}/${id}`;

    const formData = new FormData();
    formData.append("name", worker.name);
    formData.append("sector", worker.sector);

    if (image) {
        formData.append("file", image, image.name);
    }

    return this.httpClient.put(url, formData);
}


  deleteWorker(id: number){
    const url = `${this.endPoint}/${id}`;
    return this.httpClient.delete(url)
  }
}
