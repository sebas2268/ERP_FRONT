import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEditarPersonaComponent } from './crear-editar-persona/crear-editar-persona.component';
import { PersonaListComponent } from './persona-list/persona-list.component';


const routes: Routes = [
  { path: '', 
    children:[
      { path: 'personaList', component: PersonaListComponent },
      { path: 'crearPersona', component: CrearEditarPersonaComponent },
      { path: 'editarPersona/:id', component: CrearEditarPersonaComponent },  
      { path: '', redirectTo: 'personaList', pathMatch: 'full' }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }