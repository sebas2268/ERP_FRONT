import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/shared/models/persona';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  listPersona! : Persona[];
  constructor(private _personaService:PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this._personaService.getPersonas().subscribe(result => {
      this.listPersona = result;
      console.log(this.listPersona);
    });
  }
}
