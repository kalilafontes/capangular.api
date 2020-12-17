import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarWarsService } from './services/star-wars.service';
import { ListPeopleComponent } from './components/list-people/list-people.component';
import { BuscarPeopleComponent } from './components/buscar-people/buscar-people.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    BuscarPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule  

  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
