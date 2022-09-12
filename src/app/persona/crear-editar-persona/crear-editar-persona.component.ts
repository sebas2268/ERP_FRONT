import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/shared/models/persona';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';
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

  constructor(
      private _route : ActivatedRoute, 
      private fbPersona : FormBuilder,
      private _personaService : PersonaService
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
        cdtelefono_movil :[''],
        dsemail          :[''],
      }
    );
  }

  ngOnInit(): void {
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

  getPersona(id:string)
  {
    this._personaService.getPersona(Number(id)).subscribe(
      result => {
        this.formPersona.patchValue(result);
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
