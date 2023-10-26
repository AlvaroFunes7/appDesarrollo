import { Persona } from "../interfaces/persona.interface"

export class User implements Persona {

    fotografia_url: string
    nombre_completo: string
    edad: string
    description: string

    constructor() {
        
        this.fotografia_url="";
        this.nombre_completo="";
        this.edad ="";
        this.description="";
    
    }

}