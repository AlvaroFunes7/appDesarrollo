import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() visible:EventEmitter<boolean>;

  isVisible!:boolean;
  isDark!:boolean;


  constructor() {
    this.isVisible = true;
    
    this.visible= new EventEmitter();
  }
  
  ngOnInit() {
    this.visible.emit(this.isVisible)
    
  }


 
  
  changeVisible() {
    this.isVisible = ! this.isVisible;
    this.visible.emit(this.isVisible)
    console.log(this.isVisible + "clickaste");
  }
 
}
