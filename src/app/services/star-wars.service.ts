import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { StarWars } from "./../models/starWars.model";
import { ListPeople } from '../models/listPeople.model';
import { Veiculos } from '../models/veiculos.model';

const apiURL = "https://swapi.dev/api/"


@Injectable()
export class StarWarsService {

  constructor(private http:HttpClient) { }

  getPeople(id:string): Observable<StarWars> {
    
    return this.http.get<StarWars>(id);
  }

  getPeopleURL(url:any): Observable<StarWars> {
    return this.http.get<StarWars>(url);
  }

  getAllPeople(): Observable<StarWars> {
    return this.http.get<StarWars>(apiURL+ "people/");
    //return result;
  }

  getVehicles(id:string): Observable<ListPeople> {    
    return this.http.get<ListPeople>(id);
  }

}