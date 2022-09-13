import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataMaestra } from 'src/app/shared/models/DataMaestra';
import { Persona } from 'src/app/shared/models/persona';
import { DataMestraService } from 'src/app/shared/services/datoMaestros/dato-mestro.service';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-editar-persona',
  templateUrl: './crear-editar-persona.component.html',
  styleUrls: ['./crear-editar-persona.component.css']
})
export class CrearEditarPersonaComponent implements OnInit {

  nmid ?: string;
  textForm : string = "Editar Persona";
  spinner : boolean = false;
  ruta : boolean;
  formPersona : FormGroup;
  persona! : Persona;
  tipoPersona! : DataMaestra[];
  generoPersona! : DataMaestra[];


  constructor(
      private _route : ActivatedRoute, 
      private fbPersona : FormBuilder,
      private _personaService : PersonaService,
      private _dataMestraService : DataMestraService
      ) { 
    this.ruta = ("editarPersona" == this._route.snapshot.url[0].path);
    this.formPersona = fbPersona.group(
      {
        cddocumento      :[{value:'', disabled: this.ruta}, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        dsnombres        :['',Validators.required],
        dsapellidos      :[''],
        fenacimiento     :['',Validators.required],
        cdtipo           :[''],
        cdgenero         :[''],
        feregistro       :[''],
        febaja           :[''],
        cdusuario        :[''],
        dsdireccion      :[''],
        dsphoto          :[''],
        cdtelfono_fijo   :[''],
        cdtelefono_movil :['',[Validators.minLength(10), Validators.pattern('[3]\\d{9}')]],
        dsemail          :['',[ Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      }
    );
  }



  ngOnInit(): void {
    this.getDataMaestra();
    this.configuracion();
  }

  configuracion(){
    this.spinner= true; 
    if(!this.ruta){
      this.spinner = false; 
      this.textForm = 'Registrar Persona';
    }
    if(this.ruta){
      this.nmid = this._route.snapshot.url[1].path;
      this.getPersona(this.nmid);
    }
  }

  getDataMaestra()
  {
    this.spinner = true;
    this._dataMestraService.getDataMaestra().subscribe(
      result => {
        this.tipoPersona = result.filter(tpersona => {
          return tpersona.nmmaestro == "tipoPersona";
        });

        this.generoPersona = result.filter(gpersona => {
          return gpersona.nmmaestro == "generoPersona";
        });

        this.spinner = false;
      },
      error => {
        Swal.fire("Ocurrio el siguiente error:", error.error.detail)
        this.spinner = false;
      }
    );
  }

  getPersona(id:string)
  {
    this._personaService.getPersona(Number(id)).subscribe(
      result => {
        this.formPersona.patchValue(result);
        if(String(result.febaja) == '0001-01-01T00:00:00'){
          this.formPersona.get("febaja")?.reset();
        }
        this.persona = result;
        this.spinner = false;
      },
      error => {
        Swal.fire("Ocurrio el siguiente error:", error.error.detail)
        this.spinner = false;
      }
    );
  }

  editar(){
    this.spinner = true;

    let persona : Persona = {
      nmid:Number(this.nmid),
      cddocumento: this.persona.cddocumento,
      dsnombres: this.formPersona.value.dsnombres,
      dsapellidos: this.formPersona.value.dsapellidos,
      fenacimiento: this.formPersona.value.fenacimiento,
      cdtipo: this.formPersona.value.cdtipo,
      cdgenero: this.formPersona.value.cdgenero,
      febaja: this.formPersona.value.febaja,
      cdusuario: this.formPersona.value.cdusuario,
      dsdireccion: this.formPersona.value.dsdireccion,
      dsphoto: this.formPersona.value.dsphoto,
      cdtelfono_fijo: this.formPersona.value.cdtelfono_fijo,
      cdtelefono_movil: this.formPersona.value.cdtelefono_movil,
      dsemail: this.formPersona.value.dsemail
    }

    this._personaService.putPersona(persona).subscribe(
      result => {
        Swal.fire("Información actualizada correctamente")
        this.spinner = false;
      },
      error => {
        Swal.fire("Ocurrio el siguiente error:", error.error.detail)
        this.spinner = false;
      }
    );
  }

  crear(){
      this.spinner = true;
  
      let persona : Persona = {
        nmid:0,
        cddocumento: this.formPersona.value.cddocumento,
        dsnombres: this.formPersona.value.dsnombres,
        dsapellidos: this.formPersona.value.dsapellidos,
        fenacimiento: this.formPersona.value.fenacimiento,
        cdtipo: this.formPersona.value.cdtipo,
        cdgenero: this.formPersona.value.cdgenero,
        febaja: this.formPersona.value.febaja,
        cdusuario: this.formPersona.value.cdusuario,
        dsdireccion: this.formPersona.value.dsdireccion,
        dsphoto: this.formPersona.value.dsphoto,
        cdtelfono_fijo: this.formPersona.value.cdtelfono_fijo,
        cdtelefono_movil: this.formPersona.value.cdtelefono_movil,
        dsemail: this.formPersona.value.dsemail
      }
  
      this._personaService.postPersona(persona).subscribe(
        result => {
          Swal.fire("Persona registrada correctamente")
          this.formPersona.reset();
          this.spinner = false;
        },
        error => {
          Swal.fire("Ocurrio el siguiente error:", error.error.detail)
          this.spinner = false;
        }
      );
    }
}
