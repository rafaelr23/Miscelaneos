import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private ActivatedRouter:ActivatedRoute) {
    this.ActivatedRouter.parent.params.subscribe(params =>{
      console.log("Ruta Hija usuario nuevo");
      console.log(params);

    })
   }

  ngOnInit(): void {
  }

}
