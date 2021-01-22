import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private ActivatedRouter:ActivatedRoute) {
    this.ActivatedRouter.params.subscribe(params =>{
      console.log("Ruta Padre");
      console.log(params);

    })
   }

  ngOnInit(): void {
  }

}
