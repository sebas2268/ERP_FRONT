import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePaciente } from 'src/app/shared/models/CreatePaciente';
import { Paciente } from 'src/app/shared/models/paciente';
import { Persona } from 'src/app/shared/models/persona';
import { PacienteService } from 'src/app/shared/services/paciente/paciente.service';
import { PersonaService } from 'src/app/shared/services/persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-editar-paciente',
  templateUrl: './crear-editar-paciente.component.html',
  styleUrls: ['./crear-editar-paciente.component.css']
})
export class CrearEditarPacienteComponent implements OnInit {

  nmid_persona! : number;
  nmid_medicotra! :number;
  formPaciente : FormGroup;
  paciente! : Persona;
  medico! : Persona;
  spinner : boolean = false;

  constructor(
    private fbPaciente : FormBuilder,
    private _personaServices : PersonaService,
    private _pacienteServices : PacienteService
  ) { 
    this.formPaciente = fbPaciente.group(
      {
        cddocumento             :['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        dsnombres               :['',Validators.compose([Validators.required, Validators.maxLength(60)])],
        dsapellidos             :['',Validators.maxLength(60)],
        cddocumentoMedicotra    :['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        dsnombresMedicotra      :['', Validators.required],
        dsapellidosMedicotra    :[''],
        dseps                   :['',Validators.maxLength(50)],
        dsarl                   :['',Validators.maxLength(50)],
        febaja                  :[''],
        cdusuario               :['',Validators.maxLength(150)],
        dscondicion             :['',Validators.maxLength(500)],
      }
    );
  }

  ngOnInit(): void {
  }

  crear(){
    this.spinner = true;

    let paciente : CreatePaciente = {
      nmid_persona :this.nmid_persona,
      nmid_medicotra :this.nmid_medicotra,
      dseps: this.formPaciente.value.dseps,
      dsarl: this.formPaciente.value.dsarl,
      febaja: this.formPaciente.value.febaja,
      dscondicion: this.formPaciente.value.dscondicion,
      cdusuario: this.formPaciente.value.cdusuario
    }

    this._pacienteServices.postPaciente(paciente).subscribe(
      result => {
        Swal.fire("Paciente registrado correctamente")
        this.formPaciente.reset();
        this.spinner = false;
      },
      error => {
        Swal.fire("Ocurrio el siguiente error:", error.error.detail)
        this.spinner = false;
      }
    );
  }

  buscarPersona(tecla : any){
    if (tecla === "Enter") {
      this._personaServices.getPersonaDocumento(this.formPaciente.value.cddocumento).subscribe(
        result => {
          this.paciente = result;         
          this.nmid_persona = this.paciente.nmid;
          this.formPaciente.get("dsnombres")?.setValue(this.paciente.dsnombres);
          this.formPaciente.get("dsapellidos")?.setValue(this.paciente.dsapellidos);
        },
        error => {
          console.log(error);
        }
      )
    }
    else
    {
      this.formPaciente.controls["dsnombres"].reset();
      this.formPaciente.controls["dsapellidos"].reset();
    }
  }

  buscarMedico(tecla : any){
    if (tecla === "Enter") {
      this._personaServices.getPersonaDocumento(this.formPaciente.value.cddocumentoMedicotra).subscribe(
        result => {
          this.paciente = result;
          if(this.paciente.cdtipo !== "Trabajador"){
            Swal.fire("El documento ingresado no corresponde a un médico, es un: ", this.paciente.cdtipo)
          }
          else
          {
            this.nmid_medicotra = this.paciente.nmid;
            this.formPaciente.get("dsnombresMedicotra")?.setValue(this.paciente.dsnombres);
            this.formPaciente.get("dsapellidosMedicotra")?.setValue(this.paciente.dsapellidos);
          }
        },
        error => {
          console.log(error);
        }
      )
    }
    else
    {
      this.formPaciente.controls["dsnombresMedicotra"].reset();
      this.formPaciente.controls["dsapellidosMedicotra"].reset();
    }
  }

}
