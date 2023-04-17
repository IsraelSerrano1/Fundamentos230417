export class paciente{

    _nombre: string;
    _apellidos: string;
    _dni: number;
    _telefono: number;
    _direccion: string;
    _email: string;


    constructor(nombre: string,apellidos: string, dni: number, telefono: number, direccion: string, email: string){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._dni=dni;
        this._telefono=telefono;
        this._direccion=direccion;
        this._email=email;
    }
}