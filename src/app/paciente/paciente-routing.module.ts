import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteListComponent } from './paciente-list/paciente-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pacienteList', pathMatch: 'full' },
  { path: 'pacienteList', component: PacienteListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }