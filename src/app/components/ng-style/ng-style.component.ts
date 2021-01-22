import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style]="style" #p>
      Hola mundo ... Esta es una etiqueta
    </p>
    <button class="btn btn-outline-primary" (click)="aumentarPx(p)">
      <i class="fa fa-plus"></i>
    </button>
    
    <button class="btn btn-outline-primary" (click)="disminuirPx(p)">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamano:number = 30;
  color:number[]=[255,0,0];
  style ={
    "fontSize":this.tamano+"px",
    "color":  "rgb("+this.color+")"
  }
  constructor() { }

  ngOnInit(): void {
  }
  aumentarPx(p:NgStyleComponent){
    this.tamano += 5;
    p.style.fontSize = this.tamano+"px";
    this.color[1] += 50;
    p.style.color = "rgb("+this.color+")";
    console.log(p.style.color,p.style.fontSize);
   
    
  }
  disminuirPx(p:NgStyleComponent){
    this.tamano -= 5;
    p.style.fontSize = this.tamano+"px";
    this.color[1] -= 20;
    p.style.color = "rgb("+this.color+")";
    console.log(this.style);
   
    
  }
}
