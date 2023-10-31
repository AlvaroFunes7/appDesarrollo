import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isVisible!:boolean;


  constructor() {
    this.isVisible = true;
  }



  changeVisible() {
    this.isVisible = ! this.isVisible;
    console.log(this.isVisible + "clickaste");
  }
}
