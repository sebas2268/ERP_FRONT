import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  fecha(fecha : Date){
    let fechaCorta = '--/--/--';
    if (fecha.toString() == '0001-01-01T00:00:00'){
      return fechaCorta;
    }
    let fechaFormat = new Date(fecha);    
    let dia = fechaFormat.getDate();
    let month = fechaFormat.getMonth() +1 ;
    let year = fechaFormat.getFullYear();
    fechaCorta = year + '-' + month + '-' +  dia ;
    return fechaCorta;  
  }

  fechaCorta(fecha : Date){
    let fechaCorta = '--/--/--';
    if (fecha.toString() == '0001-01-01T00:00:00'){
      return fechaCorta;
    }
    let fechaFormat = new Date(fecha);    
    let dia = fechaFormat.getDate();
    let month = fechaFormat.getMonth() +1 ;
    let year = fechaFormat.getFullYear();
    fechaCorta = dia + '/' + month + '/' + year;
    return fechaCorta;  
  }

}
