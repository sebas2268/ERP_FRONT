export interface Persona {
    nmid:             number;
    cddocumento:      string;
    dsnombres:        string;
    dsapellidos:      string;
    fenacimiento:     Date;
    cdtipo:           string;
    cdgenero:         string;
    feregistro?:       Date;
    febaja:           Date;
    cdusuario:        string;
    dsdireccion:      string;
    dsphoto:          string;
    cdtelfono_fijo:   string;
    cdtelefono_movil: string;
    dsemail:          string;
}