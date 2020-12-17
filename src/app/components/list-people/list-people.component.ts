import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListPeople } from 'src/app/models/listPeople.model';
import { Veiculos } from 'src/app/models/veiculos.model';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListPeopleComponent implements OnInit {

  peopleList:ListPeople= {};
  listvehicle: Array<any> = new Array<any>();
  vehiclesall:  Array<any> = new Array<any>();
  
  constructor(private service:StarWarsService) { }

  getAll(){
    this.service.getAllPeople();
    console.log(this.service);
  }

  getAllVehicles(id:string){
    this.service.getVehicles(id);
    console.log(this.service);
  }
  ngOnInit(): void {
    this.service.getAllPeople()
    .subscribe((response:any)=>{
      this.peopleList = response; 
/* 
      this.peopleList.results?.map(result =>{
        this.service.getAllPeople()        
        .subscribe(res => result.url = res, 
          (error:HttpErrorResponse)=>console.log(error));
      });  */
   //   this.getAllVehicles(this.vehicles2);
      this.peopleList.results?.map(result =>{
        //console.log(result.url);
        this.service.getPeopleURL(result.url)
        .subscribe(res => result.people = res, 
          (error:HttpErrorResponse)=>console.log(error));
      });   

    });

    
  }

}
