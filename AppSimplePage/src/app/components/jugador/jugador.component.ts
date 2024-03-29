import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/interfaces/jugador.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {

  jugador: Jugador;

  constructor(private activatedRoute: ActivatedRoute, private _jugadoresService: JugadoresService) { 

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.jugador = this._jugadoresService.getJugadorXId(params['id']);
    });

  }

}
