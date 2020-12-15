import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolarSystemsService {
  public currentId = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) { }

  getCurrentId() {
    return this.currentId.asObservable();
  }

  changeCurrentId(id: number) {
    this.currentId.next(id);
  }

  getSolarSystems(): Observable<SolarSystemIFService[]> {
    return this.http.get<SolarSystemIFService[]>('api/SolarSystem');
  }
}

interface SolarSystemIFService {
  solarSystemId: number;
  solarSystemName: string;
}
