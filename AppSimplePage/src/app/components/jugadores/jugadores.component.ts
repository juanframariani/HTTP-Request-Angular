import { Component } from '@angular/core';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Jugador } from 'src/app/interfaces/jugador.interface';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {
  message: any;
  jugadores: Jugador[] = [];
  usoObservador = true;

  constructor(private _jugadoresService: JugadoresService, private router: Router, private activatedRoute: ActivatedRoute ) {
    if (this.usoObservador) {
      // uso OBSERVADOR
      this._jugadoresService.getJugadoresFromDataBase()
        .subscribe(data => {
          console.log(data);
          // tslint:disable-next-line:forin
          for (const eq in data) {
            console.log(data[eq]);
            this.jugadores.push(data[eq]);
          }
        },
          (err: HttpErrorResponse) => {
            if (err instanceof Error) {
              // client-side error
              this.message = 'An error ocurred ${err.error.message}';
            } else {
              this.message = 'Backend returned error code: ${err.status}, body was: ${err.message}';
            }
          }
        );
    } else {
      // no uso OBSERVADOR
      _jugadoresService.buscarJugadoresEnBaseDatosPost();
      this.jugadores = this._jugadoresService.jugadores;
    }
  }

  public verJugador(idx: string) {
    this.router.navigate(['/jugador', idx]);
  }

  filtrarJugadorXPosicion(textoBusqueda: string) {
    // console.log(textoBusqueda);
    this.router.navigate(['/jugadores', textoBusqueda]);
  }

}
