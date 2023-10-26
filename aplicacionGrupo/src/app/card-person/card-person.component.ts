import { Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.css']
})
export class CardPersonComponent {

  @Input() usuarioRecibido!:Persona
  mostrarTarjeta:boolean;

  constructor() {
    this.mostrarTarjeta = false
  }

  onMouseOver() {
    this.mostrarTarjeta = true; // Puedes definir una variable 'mostrarTarjeta' en tu componente y establecerla a 'true'
  }

  onMouseOut() {
    this.mostrarTarjeta = false; // Cuando el mouse sale de la tarjeta, se oculta
  }

}
