import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  arrUsuarios!:Persona[];

  constructor(){
    this.arrUsuarios= [
      {
        fotografia_url : "assets\\christian_garcia.jpeg",
        nombre_completo : "Christian Garcia Jara",
        edad: "21",
        description: "Buscando trabajo "

      },
      {
        fotografia_url : "assets\\carlos_ramirez.jpeg",
        nombre_completo : "Carlos Ramirez Paez",
        edad: "21",
        description: "Buscando trabajo "

      },
      {
        fotografia_url : "assets\\alvaro_funes.jpeg",
        nombre_completo : "Alvaro Funes",
        edad: "21",
        description: "Buscando trabajo "

      }

    ]
  }

}
