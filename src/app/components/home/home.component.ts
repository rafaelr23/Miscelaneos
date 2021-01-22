import { Component, OnInit,OnChanges,DoCheck,AfterViewChecked,OnDestroy,AfterContentInit,AfterContentChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style>
      
     <app-css> </app-css>

    <p>
        Hola Rafa
    </p>
    <app-clases></app-clases>
    <p appResaltado>
        Hola Mundo
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterViewChecked,OnDestroy,AfterContentInit,AfterContentChecked,AfterViewInit {

  constructor() {
    console.log("constrictor")
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }
 
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

  

 

  
}
