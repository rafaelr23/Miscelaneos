import { Directive,ElementRef,HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private er:ElementRef<ElementCSSInlineStyle>) { 
    console.log("directiva llamada");
    //er.nativeElement.style.backgroundColor = "yellow"
  }
  
  @HostListener('mouseenter') mouseEntro(){
    this.er.nativeElement.style.backgroundColor = "yellow"
    
  }
  @HostListener('mouseleave') mouseSalio(){
    this.er.nativeElement.style.backgroundColor = "#ffffff"
  }
}
