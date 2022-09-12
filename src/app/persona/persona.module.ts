import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaRoutingModule } from './persona-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonaListComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedModule
  ]
})
export class PersonaModule { }
