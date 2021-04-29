import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Country} from '../domain/Country';

@Component({
  selector: 'app-name',
  templateUrl: './capitalcity.component.html',
  styleUrls: ['./capitalcity.component.css']
})
export class CapitalcityComponent implements OnInit {
  countries: Country[] = [];
  capitalCity: string;


  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }
  searchByCapitalCity(): void {
    this.apiHttp.getCountriesCapitalCity(this.capitalCity).subscribe((r: Country[]) => this.countries = r);
  }
}
