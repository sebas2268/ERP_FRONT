import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/shared/models/persona';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';

@Component({
  selector: 'app-crear-editar-paciente',
  templateUrl: './crear-editar-paciente.component.html',
  styleUrls: ['./crear-editar-paciente.component.css']
})
export class CrearEditarPacienteComponent implements OnInit {

  formPaciente : FormGroup;
  paciente! : Persona;
  medico! : Persona;

  constructor(
    private fbPaciente : FormBuilder,
    private _personaServices : PersonaService
  ) { 
    this.formPaciente = fbPaciente.group(
      {
        cddocumento             :['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        dsnombres               :['', Validators.required],
        dsapellidos             :[''],
        cddocumentoMedicotra    :['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        dsnombresMedicotra      :['', Validators.required],
        dsapellidosMedicotra    :[''],
        dseps                   :[''],
        dsarl                   :['',Validators.required],
        febaja                  :[''],
        cdusuario               :[''],
        dscondicion             :[''],
      }
    );
  }

  ngOnInit(): void {
  }

  crearPaciente(){

  }

  buscarPersona(tecla : any){
    if (tecla === "Enter") {
      this._personaServices.getPersonaDocumento(this.formPaciente.value.cddocumento).subscribe(
        result => {
          this.paciente = result;
          this.formPaciente.get("dsnombres")?.setValue(this.paciente.dsnombres);
          this.formPaciente.get("dsapellidos")?.setValue(this.paciente.dsapellidos);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
