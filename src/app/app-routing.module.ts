import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';


const routes: Routes = [
  {path: 'paciente', loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)},
  {path: '', loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
