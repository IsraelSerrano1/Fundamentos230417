import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  nombre: string= "";
  mensaje: string="";
  registrado: boolean= false;
  peliculas: string[]=[
    "El Imperio Contraataca",
    "Flubber",
    "Avatar",
    "La Patrulla Canina al Rescate"
  ];

  personaje = "";

  comprobarIf(){    

    this.registrado = true

    this.mensaje=", has pulsado el botón para comprobar el ngIf"
  }
}
