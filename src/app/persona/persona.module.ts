import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrearEditarPersonaComponent } from './crear-editar-persona/crear-editar-persona.component';

@NgModule({
  declarations: [
    PersonaListComponent,
    CrearEditarPersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule
  ]
})
export class PersonaModule { }
