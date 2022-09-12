import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/shared/models/persona';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  listPersona! : Persona[];
  spinner : boolean = false;
  dataSource = new MatTableDataSource(this.listPersona);
  displayedColumns : string[] = ['cddocumento', 'dsnombres',  'dsapellidos', 'feregistro','cdtelfono_fijo', 'cdtelefono_movil','dsemail', 'acciones'];

  constructor(private _personaService:PersonaService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this._personaService.getPersonas().subscribe(result => {
      this.listPersona = result;
      this.dataSource= new MatTableDataSource(this.listPersona);
      this.ngAfterViewInit();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
