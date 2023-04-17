import { Component, EventEmitter, Output } from '@angular/core';
import { paciente } from '../_modelo/paciente';


@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  persona : paciente = new paciente("", "", 0, 0, "","")
  @Output() enviarDatos = new EventEmitter <paciente>()
  
  add(){
  this.enviarDatos.emit(this.persona)
  }

}
