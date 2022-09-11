import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/models/paciente';
import { PacienteService } from 'src/app/shared/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  listPaciente! : Paciente[];
  constructor(private _pacienteService : PacienteService) { }


  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(){
    this._pacienteService.getPacientes().subscribe(result => {
      this.listPaciente = result;
      console.log(this.listPaciente);
    });
  }

}
