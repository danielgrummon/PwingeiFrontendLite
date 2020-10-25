import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Phenotype } from './thelist/thelist.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  
  getPhenotypeList(): Observable<Phenotype[]>{
    return this.httpClient.get<Phenotype[]>("https://pwingei-backend.herokuapp.com/app/rest/wingei/pwingei");    
  }
}