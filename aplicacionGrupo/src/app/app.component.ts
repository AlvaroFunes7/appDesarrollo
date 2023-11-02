import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplicacionGrupo';

  visible!:boolean;



  getVisible($event:any) {
    this.visible = $event
    console.log("Desde appcomponent, ", this.visible);
  }
}
