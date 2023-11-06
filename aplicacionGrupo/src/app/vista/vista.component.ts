import { Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  arrUsuarios!:Persona[];

  @Input() usuarioCreado!:Persona;
  @Input() visible!:boolean

  

  constructor(){

    this.arrUsuarios= [
      
    ]

    

   
  }

  ngOnInit() {
    
    const response = localStorage.getItem("arrCards");

    if(response == null){
      this.arrUsuarios = [
        {
          fotografia_url : "assets\\christian_garcia.jpeg",
          nombre_completo : "Christian Garcia Jara",
          edad: "21",
          description: "THE UI DESIGNER"
  
        },
        {
          fotografia_url : "assets\\carlos_ramirez.jpeg",
          nombre_completo : "Carlos Ramirez Paez",
          edad: "22",
          description: "THE DEVELOPER"
  
        },
        {
          fotografia_url : "assets\\alvaro_funes.jpeg",
          nombre_completo : "Alvaro Funes",
          edad: "24",
          description: "THE LEADER BOSS"
  
        }
  
      ]
    }else {
      this.arrUsuarios =JSON.parse(response) ;
    }
  }

  

  guardarUser($event:any){

    let isOk: boolean = false;
    let usuario:Persona = $event
    this.arrUsuarios.find(obj => obj.fotografia_url === $event.fotografia_url ?isOk = true : isOk = false)
    if( isOk) {
      Swal.fire("¡USUARIO REPETIDO!")
    }else {
      this.arrUsuarios.push(usuario)
      localStorage.setItem("arrCards", JSON.stringify(this.arrUsuarios))
    }

    console.log(this.arrUsuarios);


    
  }



 

}
