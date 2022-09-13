import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrearEditarPacienteComponent } from './crear-editar-paciente/crear-editar-paciente.component';

@NgModule({
  declarations: [
    PacienteListComponent,
    CrearEditarPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule
  ]
})
export class PacienteModule { }
