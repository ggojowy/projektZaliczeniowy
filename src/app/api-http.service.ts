import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchCategories} from './domain/SearchCategories';
import {Observable} from 'rxjs';
import {Country} from './domain/Country';

// adres do backendu
const BASE_URL = 'https://restcountries.eu/rest/v2/name';
const BASE_URL2 = 'https://restcountries.eu/rest/v2/capital';
const BASE_URL3 = 'https://restcountries.eu/rest/v2/currency';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  getCountries(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL}/${name}`);
  }
  getCountriesCapitalCity(capital: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL2}/${capital}`);
  }
  getCountriesCurrency(currency: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL3}/${currency}`);
  }
}
