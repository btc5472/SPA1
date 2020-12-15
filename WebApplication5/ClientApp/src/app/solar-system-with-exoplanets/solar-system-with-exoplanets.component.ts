import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solar-system-with-exoplanets',
  templateUrl: './solar-system-with-exoplanets.component.html',
  styleUrls: ['./solar-system-with-exoplanets.component.css']
})
export class SolarSystemWithExoplanetsComponent implements OnInit {
  public solarSystemVMs: SolarSystemVMIF[];
  public ssId: number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    http.get<SolarSystemVMIF[]>(baseUrl + 'api/solarSystemsWithExoplanets/' + this.ssId).subscribe(result => {
      this.solarSystemVMs = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ssId = id;
  }

}

interface SolarSystemVMIF {
  name: string;
  exoplanetList: DOMStringList;
}
