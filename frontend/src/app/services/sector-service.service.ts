import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorServiceService {
  private endPoint = "http://localhost:8080/api/sector";

  constructor(private httpClient: HttpClient) { }

  createSector(sector: { name: string }): Observable<any> {
    return this.httpClient.post(this.endPoint, sector);
  }

  getAllSectors(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endPoint);
  }

  getSectorById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.endPoint}/${id}`);
  }

  updateSector(id: number, sector: { name: string }): Observable<any> {
    return this.httpClient.put(`${this.endPoint}/${id}`, sector);
  }

  deleteSector(id: number): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  getSectorDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.endPoint}/${id}`);
  }
}
