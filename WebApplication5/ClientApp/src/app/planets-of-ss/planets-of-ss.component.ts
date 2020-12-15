import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolarSystemsService } from '../solar-systems.service';

@Component({
  selector: 'app-planets-of-ss',
  templateUrl: './planets-of-ss.component.html',
  styleUrls: ['./planets-of-ss.component.css']
})
export class PlanetsOfSsComponent implements OnInit {
  //public ssWithPlanets = [];
  solarSystemId: number;

  constructor(private ssData: SolarSystemsService) { }

  ngOnInit(): void {
    this.ssData.getCurrentId().subscribe(currentId => this.solarSystemId = currentId);
  }
}
/*
------------------------------------------------------------------------------
export class AuthorWithBooksComponent implements OnInit {

  public authorWithBooks = [];
  authorId: number;

  constructor(public _sharedService: AuthorsService, private http: HttpClient, public _authorwithbooksService: AuthorwithbooksService) { }


  ngOnInit(): void {
    this._sharedService.getSelectedId().subscribe((selectedId) => { console.log(selectedId); this.authorId = selectedId });
    console.log(this.authorId);
    console.log("using authorwithbooksservice");

    this._authorwithbooksService.getAuthorWithBooks(this.authorId).subscribe(data => this.authorWithBooks = data);
  }

}
*/
