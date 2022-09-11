import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../../connections';
import { Persona } from '../../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _http : HttpClient) { }

  getPersonas():Observable<Persona[]>{
    return this._http.get<Persona[]>(`${Connection.ENDPOINT}/Persona`);
  }

  getPersona(nmid:number):Observable<Persona>{
    return this._http.get<Persona>(`${Connection.ENDPOINT}/Persona/${nmid}`);
  }

  getPersonaDocumento(cddocumento:string):Observable<Persona>{
    return this._http.get<Persona>(`${Connection.ENDPOINT}/cddocumento/${cddocumento}`);
  }

  putPersona(persona:Persona):Observable<number>{
    return this._http.put<number>(`${Connection.ENDPOINT}/Persona/nmid/${persona.nmid}`,persona);
  }

  postPersona(persona:Persona):Observable<number>{
    return this._http.post<number>(`${Connection.ENDPOINT}/Persona/${persona.nmid}`,persona);
  }

}