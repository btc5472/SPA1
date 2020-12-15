import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solar-systems',
  templateUrl: './solar-systems.component.html'
})

export class SolarSystemsComponent {
  public solarSystems: SolarSystemIF[];
  public SSId: number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    http.get<SolarSystemIF[]>(baseUrl + 'api/SolarSystems').subscribe(result => {
      this.solarSystems = result;
    }, error => console.error(error));
  }

  onSelect(SSId: number) {
    this.router.navigate(['/solar-systems', SSId]);
  }

}

interface SolarSystemIF {
  solarSystemId: number;
  name: string;
  binaryStars: boolean;
  numPlanets: number;
  //life: boolean;
}
