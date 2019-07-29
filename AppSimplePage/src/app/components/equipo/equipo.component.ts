import { Component, OnInit } from '@angular/core';
import { Equipo, EquiposService } from 'src/app/servicios/equipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  
  equipo:Equipo;

  constructor(private activatedRoute:ActivatedRoute, private _equiposService:EquiposService) {

      this.activatedRoute.params.subscribe(params =>{
        console.log(params['id'])
        this.equipo = this._equiposService.getEquipoXId(params['id'])
    }) 

   }

   
}

