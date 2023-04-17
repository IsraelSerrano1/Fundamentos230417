import { Component } from '@angular/core';
import {paciente} from '../_modelo/paciente'

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})
export class Padre1Component {

  pacientes : paciente[] = []
  constructor(){}
  ngOnInit(){
  }

  addPaciente(persona:paciente){
    this.pacientes.push(persona)
  }
  

}
