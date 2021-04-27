import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchCategories} from './domain/SearchCategories';
import {Observable} from 'rxjs';

//adres do backendu
const BASE_URL = 'https://restcountries.eu/#api-endpoints-name';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  nameInput(pName: SearchCategories): Observable<any> {

  }

}
