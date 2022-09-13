import { Persona } from "./persona";

export interface Paciente {
    nmid:           number;
    nmid_persona:   number;
    nmid_medicotra: number;
    dseps:          string;
    dsarl:          string;
    feregistro:     Date;
    febaja:         Date;
    cdusuario:      string;
    dscondicion:    string;
    nmidPersona:    Persona;
    nmidMedicotra:  Persona;
}