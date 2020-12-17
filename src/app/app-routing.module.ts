import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarPeopleComponent } from './components/buscar-people/buscar-people.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';

const routes: Routes = [
  { path: 'buscar', component: BuscarPeopleComponent },
  { path: 'listar', component: ListPeopleComponent },
  { path: '', redirectTo: '/buscar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
