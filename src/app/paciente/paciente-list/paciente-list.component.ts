import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetallePaciente } from 'src/app/shared/models/DetallePaciente';
import { Paciente } from 'src/app/shared/models/paciente';
import { Persona } from 'src/app/shared/models/persona';
import { PacienteService } from 'src/app/shared/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  listPaciente! : DetallePaciente[];
  spinner : boolean = false;
  dataSource = new MatTableDataSource(this.listPaciente);
  displayedColumns : string[] = ['dsnombres','dsapellidos','cddocumento','dseps','dsarl','feregistro','febaja','cdusuario','dscondicion','dsnombresMedicotra','dsapellidosMedicotra','cddocumentoMedicotra'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _pacienteService : PacienteService) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(){
    this._pacienteService.getPacientes().subscribe(result => {
      this.normalizarDatosTabla(result);
    });
  }

  getDetallePacientes(paciente : Paciente){
    var detallePaciente : DetallePaciente = {
      nmid :                  paciente.nmid,
      dsnombres:              paciente.nmidPersona.dsnombres,          
      dsapellidos:            paciente.nmidPersona.dsapellidos,         
      cddocumento:            paciente.nmidPersona.cddocumento,         
      dseps:                  paciente.dseps,               
      dsarl:                  paciente.dsarl,               
      feregistro:             paciente.feregistro,          
      febaja:                 paciente.febaja,              
      cdusuario:              paciente.cdusuario,           
      dscondicion:            paciente.dscondicion,         
      dsnombresMedicotra:     paciente.nmidMedicotra.dsnombres,  
      dsapellidosMedicotra:   paciente.nmidMedicotra.dsapellidos,
      cddocumentoMedicotra:   paciente.nmidMedicotra.cddocumento
    }
    return detallePaciente;
  }

  normalizarDatosTabla(paciente : Paciente[]){
    let obje = [];
    for (let i = 0; i < paciente.length; i++){    
     obje.push(this.getDetallePacientes(paciente[i]));
    }   
    this.listPaciente = obje;
    this.dataSource= new MatTableDataSource(this.listPaciente);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
