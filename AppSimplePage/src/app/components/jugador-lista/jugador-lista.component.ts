import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/interfaces/jugador.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jugador-lista',
  templateUrl: './jugador-lista.component.html',
  styleUrls: ['./jugador-lista.component.css']
})
export class JugadorListaComponent implements OnInit {

  jugadores: Jugador[] = [];
  loading = true;

  constructor(private _jugadoresService: JugadoresService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this._jugadoresService.getJugadoresFromDataBase()
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:forin
        for (const eq in data) {
          console.log(data[eq]);
          this.jugadores.push(data[eq]);
        }
        this.loading = false;
      });
  }

  delete(idJugador: string) {
    // tslint:disable-next-line:prefer-const
    let opcion = confirm('Esta seguro que desea eliminar el jugador?');
    if (opcion === true) {
      this._jugadoresService.deleteJugador(idJugador)
        .subscribe(data => {
          console.log(data);
          location.reload();
        });
    }

  }

}