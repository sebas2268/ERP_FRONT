import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Connection } from '../../connections';
import { CreatePaciente } from '../../models/CreatePaciente';
import { Paciente } from '../../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private _http : HttpClient) { }

  getPacientes():Observable<Paciente[]>{
    return this._http.get<Paciente[]>(`${Connection.ENDPOINT}/Paciente`);
  }

  postPaciente(paciente:CreatePaciente):Observable<number>{
    return this._http.post<number>(`${Connection.ENDPOINT}/Paciente`,paciente);
  }

}
