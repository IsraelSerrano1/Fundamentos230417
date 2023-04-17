import { Component } from '@angular/core';
import { paciente } from '../_modelo/paciente';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component {
  pacientes: paciente []= []
  persona : paciente = new paciente("","",0,0,"","");

  add(){
    this.pacientes.push(this.persona)
  }


}
