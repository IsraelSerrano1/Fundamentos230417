import { Component } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { numeros } from '../_modelo/numero';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css'],
})
export class FundamentoTSComponent {
  numeroPermitido: numeros = 1;
  resultadoNum: string = '';
  resultadoMes: string = '';
  mes: number = 0;

  ngOnInit() {
    this.arrays();
    this.enumeraciones();
  }
  arrays() {
    let starWars: string[] = ['Han Solo', 'Leia', 'Luke', 'Darth Vader'];

    console.log(starWars[2]);
    //añade elemento al final
    starWars.push('Rey');
    console.log(starWars);

    //borra el ultimo elemento
    starWars.pop();
    console.log(starWars);

    //borra el primer elemento
    starWars.shift();
    console.log(starWars);

    //añade elemento al comienzo del array
    starWars.unshift('Jar Jar Binks');
    console.log(starWars);

    //saber la posición de un elemento
    console.log('la posición del elemento Leia es: ', starWars.indexOf('Leia'));

    //modifica el elemento en una posición
    starWars[1] = 'Obi-Wan';
    console.log(starWars);

    //modifica elementos dentro de un array, puedes añadir,o borrar,indicando cuantos elementos
    //van a ser modificados del array
    starWars.splice(1, 0, 'Lando');
    console.log(starWars);
    let eliminado = starWars.splice(1, 1);
    console.log(starWars);
    console.log('El elemento eliminado es ', eliminado);

    let starWars2: string[] = ['Chewaka', 'Kylo Ren', 'Palpatine'];

    //concatena el contenido de 2 arrays
    let starWarsCompleto = starWars.concat(starWars2);
    console.log(starWarsCompleto);

    //da la vuelta al contenido del array
    console.log(starWarsCompleto.reverse());

    //Ordena el contenido de un array
    console.log(starWarsCompleto.sort());

    //convierte el contenido del array en una cadena de texto
    console.log(starWarsCompleto.toString());

    //convierte el array en una cadena de texto separado por el parámetro que indiquemos
    console.log(starWarsCompleto.join('/'));
  }
  enumeraciones() {
    enum meses {
      Enero = 1,
      Febrero,
      Marzo,
      Abril,
      Mayo,
      Junio,
      Julio,
      Agosto,
      Septiembre,
      Octubre,
      Noviembre,
      Diciembre,
    }

    switch (this.mes) {
      case meses.Enero:
        this.resultadoMes = 'Enero';
        break;
      case meses.Febrero:
        this.resultadoMes = 'Febrero';
        break;
      case meses.Marzo:
        this.resultadoMes = 'Marzo';
        break;
      case meses.Abril:
        this.resultadoMes = 'Abril';
        break;
      case meses.Mayo:
        this.resultadoMes = 'Mayo';
        break;
      case meses.Junio:
        this.resultadoMes = 'Junio';
        break;
      case meses.Julio:
        this.resultadoMes = 'Julio';
        break;
      case meses.Agosto:
        this.resultadoMes = 'Agosto';
        break;
      case meses.Septiembre:
        this.resultadoMes = 'Septiembre';
        break;
      case meses.Octubre:
        this.resultadoMes = 'Octubre';
        break;
      case meses.Noviembre:
        this.resultadoMes = 'Noviembre';
        break;
      case meses.Diciembre:
        this.resultadoMes = 'Diciembre';
        break;
      default:
        this.resultadoMes= "introduzca un número válido"
    }
  }
}
