import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquiposService, Equipo } from 'src/app/servicios/equipos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo-tarjeta',
  templateUrl: './equipo-tarjeta.component.html',
  styleUrls: ['./equipo-tarjeta.component.css']
})
export class EquipoTarjetaComponent implements OnInit {

  @Input() equipoAux: Equipo;
  // Instancio el emisor para poder enviar datos a otro componente
  @Output() equipoSeleccionado = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public verEquipo(idx: string) {
    // Esto emite el id del equipo seleccionado que despues es atrapado en el equipos.component.html
    this.equipoSeleccionado.emit(this.equipoAux.id);
  }
}
