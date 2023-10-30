import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent {

  usuario!:Persona;

  @Output() usuarioEnviado:EventEmitter<Persona>;


  constructor() {
    this.usuario = {
      nombre_completo:"",
      fotografia_url:"",
      edad:"",
      description:""
    }

    this.usuarioEnviado = new EventEmitter(); 
  }



  anyadir_usuario(usuario:Persona) {

   if(this.comprobarUsuario(usuario) ) {
   this.usuarioEnviado.emit(usuario);
   }

   this.reiniciarForm()

  }

   private comprobarUsuario(usuario: Persona):boolean {
    
    let isOk = false;
      if(usuario.nombre_completo == "" || usuario.edad == "" || usuario.description=="" || usuario.fotografia_url==""){
        Swal.fire("INDICA TODOS LOS CAMPOS");
      }else {
        isOk = true
      }

      return isOk
  }


  reiniciarForm() {
    this.usuario = {
      nombre_completo:"",
      fotografia_url:"",
      edad:"",
      description:""
    }
  }

}



