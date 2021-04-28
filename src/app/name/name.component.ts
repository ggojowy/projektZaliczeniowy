import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Country} from '../domain/Country';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  countries: Country[] = [];
  name: string;


  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }
  searchByName(): void {
    this.apiHttp.getCountries(this.name).subscribe((r: Country[]) => this.countries = r);
  }
}
