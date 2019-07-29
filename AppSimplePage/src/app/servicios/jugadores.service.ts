import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Jugador } from 'src/app/interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  public jugadores: Jugador[] = [];
  public jugador: Jugador;

  jugadoresListasUrl = 'http://localhost/jugadorserver/lista_jugadores.php';
  jugadorAdminUrl = 'http://localhost/jugadorserver/abm_jugador.php';
  jugadorSearchUrl = 'http://localhost/jugadorserver/search_jugador.php';

  constructor(public http: HttpClient) { }

  public buscarJugadoresEnBaseDatosPost() {
    this.http
      .post(this.jugadoresListasUrl, null, { params: new HttpParams().set('servidor', 'localhost').set('usuario', 'root') })
      .subscribe((jugadoresServer: Jugador[]) => {
        this.jugadores = jugadoresServer;
      });
  }

  public buscarJugadoresEnBaseDatosGet() {
    this.http.get(this.jugadoresListasUrl)
      .subscribe((jugadoresServer: any) => {
        this.jugadores = jugadoresServer;
      });
  }


  public getJugadores(): Jugador[] {
    return this.jugadores;
  }

  public getJugadorXId(idx: string): Jugador {
    for (const jugador of this.jugadores) {
      if (jugador.id === idx) {
        return jugador;
      }
    }
  }

  public buscarJugadores(termino: string): Jugador[] {
    const jugadoresArr: Jugador[] = [];
    termino = termino.toLowerCase();

    for (const jugador of this.jugadores) {
      const nombre = jugador.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        jugadoresArr.push(jugador);
      }

    }
    return jugadoresArr;
  }

  newJugador(jugadorNuevo: Jugador) {
    return this.http.post<Jugador>(this.jugadorAdminUrl, null, {
      params: new HttpParams().set('operacion', 'insert').set('id', '0')
        // tslint:disable-next-line:max-line-length
        .set('posicion', jugadorNuevo.posicion).set('fechaNacimiento', jugadorNuevo.fechaNacimiento).set('biografia', jugadorNuevo.biografia)
        .set('nacionalidad', jugadorNuevo.nacionalidad).set('nombre', jugadorNuevo.nombre)
    })
      .pipe(
        map(nuevoJugador => {
          console.log(nuevoJugador.nombre);
          return nuevoJugador;
        }));
  }

  getParametrosObjeto(jugador: Jugador) {
    return 'id=' + jugador.id +
      '&posicion=' + jugador.posicion +
      '&fechaNacimiento=' + jugador.fechaNacimiento +
      '&nombre=' + jugador.nombre +
      '&biografia=' + jugador.biografia +
      '&nacionalidad=' + jugador.nacionalidad;

  }

  updateJugador(jugadorUpdate: Jugador) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Jugador>(this.jugadorAdminUrl, null, {
      params: new HttpParams().set('operacion', 'update').set('id', jugadorUpdate.id)
        // tslint:disable-next-line:max-line-length
        .set('posicion', jugadorUpdate.posicion).set('fechaNacimiento', jugadorUpdate.fechaNacimiento).set('biografia', jugadorUpdate.biografia)
        .set('nacionalidad', jugadorUpdate.nacionalidad).set('nombre', jugadorUpdate.nombre)
    })
      .pipe(
        map(res => {
          console.log(res.nombre);
          return res;
        }));
  }

  deleteJugador(idJugador: string) {
    return this.http.post(this.jugadorAdminUrl, null, { params: new HttpParams().set('operacion', 'delete').set('id', idJugador) })
      .pipe(
        map(res => {
          console.log(res);
          return res;
        }));
  }

  public getJugadorXDataBase(idx: string) {
    return this.http.get(this.jugadorSearchUrl + '?idJugador=' + idx).pipe(
      map(res => {
        const jugador: Jugador = res as Jugador;
        console.log(res);
        return jugador;
      }));
  }

  getJugadoresFromDataBase() {
    return this.http.get(this.jugadoresListasUrl).pipe(
      map(jugadoresServer => jugadoresServer));
  }

  public buscarJugadoresXDenominacion(denominacion: string) {
    return this.http.get(this.jugadorSearchUrl + '?denominacion=' + denominacion).pipe(
      map(jugadoresEncontrados => {
        console.log(jugadoresEncontrados);
        return jugadoresEncontrados;
      }
      ));
  }

}
