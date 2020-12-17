import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListPeople } from 'src/app/models/listPeople.model';
import { StarWars } from 'src/app/models/starWars.model';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-buscar-people',
  templateUrl: './buscar-people.component.html',
  styleUrls: ['./../../app.component.css']
})
export class BuscarPeopleComponent implements OnInit {
  people:StarWars = {};
  peopleList:ListPeople= {};

  error:boolean = false;
  errorMessage:string = "";
  pessoaSelecionada:string = "";
  constructor(private service:StarWarsService) { }

  ngOnInit(): void {
    this.service.getAllPeople()
    .subscribe((response:any)=>{
      this.peopleList = response;
      console.log(this.peopleList);
      
      this.peopleList.results?.map(result =>{
        this.service.getPeopleURL(result.url)
        .subscribe(res => result.people = res, 
          (error:HttpErrorResponse)=>console.log(error));
      });   

    });

  }

  onSubmit(form:NgForm){
    console.log(form.value);
    if(form.value.url != ""){
      this.service.getPeople(form.value.url)
      .subscribe((response:any)=>{
        this.error = false;
        this.people = response;
        console.log(this.people);     

      }, (error:HttpErrorResponse)=> {
        if (error.status == 404){
          this.error = true;
          this.errorMessage = "Pessoa nao encontrado"
        }
      });

    } else{
      this.error = true;
      this.errorMessage = "Insira a pessoa"
    }
    

  }

}
