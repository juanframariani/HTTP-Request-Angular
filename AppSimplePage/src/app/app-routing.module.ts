import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent  } from './components/about/about.component';
import {EquiposComponent} from './components/equipos/equipos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JugadorListaComponent } from './components/jugador-lista/jugador-lista.component';
import { JugadorAdminComponent } from './components/jugador-admin/jugador-admin.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: 'equipo/:id', component: EquipoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'jugadores', component: JugadoresComponent },
    { path: 'jugador/:id', component: JugadorComponent },
    { path: 'lista', component: JugadorListaComponent },
    { path: 'admin/:id', component: JugadorAdminComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
