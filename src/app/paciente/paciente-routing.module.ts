import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListComponent } from './paciente-list/paciente-list.component';



const routes: Routes = [
  { path: '', 
    children:[
      { path: 'pacienteList', component: PacienteListComponent }, 
      { path: '', redirectTo: 'pacienteList', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }