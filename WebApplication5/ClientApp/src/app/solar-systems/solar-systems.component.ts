import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-solar-systems',
  templateUrl: './solar-systems.component.html'
})

export class SolarSystemsComponent {
  public solarSystems: SolarSystemIF[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<SolarSystemIF[]>(baseUrl + 'api/SolarSystems').subscribe(result => {
      this.solarSystems = result;
    }, error => console.error(error));
  }
}

interface SolarSystemIF {
  solarSystemId: number;
  name: string
  binaryStars: boolean;
  numPlanets: number;
  //life: boolean;
}
