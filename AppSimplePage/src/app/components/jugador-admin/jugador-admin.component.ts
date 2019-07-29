import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JugadoresService } from 'src/app/servicios/jugadores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/interfaces/jugador.interface';

@Component({
  selector: 'app-jugador-admin',
  templateUrl: './jugador-admin.component.html',
  styleUrls: ['./jugador-admin.component.css']
})
export class JugadorAdminComponent implements OnInit {

  jugador: Jugador = {
    id: '0',
    nombre: '',
    nacionalidad: '',
    fechaNacimiento: '',
    posicion: '',
    biografia: ''
  };

  new = false;
  idJugador: string;
  resultadoOperacion = '';

  constructor(private _jugadoresService: JugadoresService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params
      .subscribe(
        parametros => {
          this.idJugador = parametros['id'];
          if (this.idJugador !== 'nuevo') {
            _jugadoresService.getJugadorXDataBase(this.idJugador)
              .subscribe(jugador => this.jugador = jugador);
          } else {
            console.log('ES NUEVO');
          }
        }
      );

  }

  ngOnInit() {
  }

  save() {
    if (this.idJugador === 'nuevo') {
      console.log('nuevo');
      this._jugadoresService.newJugador(this.jugador)
        .subscribe(data => {
          if (data && data.id) {
            this.resultadoOperacion = 'Operación finalizada con exito';
            this.router.navigate(['/admin', data.id]);
          } else {
            this.resultadoOperacion = 'Error en la operación, verifique los datos';
          }
        },
          error => console.error(error));
    } else {
      console.log(`Update ${this.idJugador}`);
      this._jugadoresService.updateJugador(this.jugador)
        .subscribe(data => {
          if (data && data.id) {
            this.resultadoOperacion = 'Operación finalizada con exito';
            console.log(data);
          } else {
            this.resultadoOperacion = 'Error en la operación, verifique los datos';
          }
        },
          error => console.error(error));
    }
  }

  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      nacionalidad: ''
    });
  }

}
