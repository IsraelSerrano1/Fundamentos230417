import { Component } from '@angular/core';
import { medico } from '../_modelo/medico';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component {
  medicos: medico []= []
  persona : medico = new medico("","",0,0,"","");

  add(){
    this.medicos.push(this.persona)
    this.persona = new medico("","",0,0,"","");
  }


}
