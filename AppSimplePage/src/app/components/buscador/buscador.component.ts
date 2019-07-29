import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquiposService, Equipo } from 'src/app/servicios/equipos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  equipos:Equipo[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _equiposService:EquiposService, private router:Router) { }

  ngOnInit() {

      this.activatedRoute.params.subscribe(params=>{
        this.termino = params['termino'];
        this.equipos = this._equiposService.buscarEquipos(params['termino']);
      });
  }

  public verEquipo(idx:string){
    this.router.navigate(['/equipo', idx])
  }

}
