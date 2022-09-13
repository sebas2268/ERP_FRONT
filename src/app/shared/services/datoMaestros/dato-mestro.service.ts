import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from '../../connections';
import { DataMaestra } from '../../models/DataMaestra';

@Injectable({
  providedIn: 'root'
})
export class DataMestraService {


  constructor(private _http : HttpClient) {}

   getDataMaestra():Observable<DataMaestra[]>{
    return this._http.get<DataMaestra[]>(`${Connection.ENDPOINT}/DataMaestra`);
  }

}