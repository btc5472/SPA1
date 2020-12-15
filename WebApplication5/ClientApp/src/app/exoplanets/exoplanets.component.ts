import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-exoplanets',
    templateUrl: './exoplanets.component.html'
})

export class ExoplanetsComponent {
  public exoplanets: ExoplanetsIF[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ExoplanetsIF[]>(baseUrl + 'api/Exoplanets').subscribe(result => {
      this.exoplanets = result;
    }, error => console.error(error));
  }
}

interface ExoplanetsIF {
  exoplanetId: number;
  name: string
  numMoons: number;
  life: boolean;
  solarSystemId: number;
}
