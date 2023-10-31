import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isVisible!:boolean;
  isDark!:boolean;


  constructor() {
    this.isVisible = true;
    this.isDark = false;
  }



  changeVisible() {
    this.isVisible = ! this.isVisible;
    console.log(this.isVisible + "clickaste");
  }
  changeMode() {
    this.isDark = ! this.isDark;
    console.log(this.isDark + "clickaste");
  }
}
