import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Country} from '../domain/Country';

@Component({
  selector: 'app-name',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  countries: Country[] = [];
  currency: string;


  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }
  searchByCurrency(): void {
    this.apiHttp.getCountriesCurrency(this.currency).subscribe((r: Country[]) => this.countries = r);
  }
  chooseByCountry(name): void {
   this.countries = this.countries.filter(x => x.name === name);
  }
}
