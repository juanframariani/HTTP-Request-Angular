import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { KeysPipe } from './pipes/keys.pipe';
import { LoadingComponent } from './widgets/loading/loading.component';

import { EquiposService } from './servicios/equipos.service';
import { JugadoresService } from './servicios/jugadores.service';
import { EquipoComponent } from './components/equipo/equipo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { FilterlistPipe } from './components/jugadores/filterlist.pipe';
import { EquipoTarjetaComponent } from './components/equipo-tarjeta/equipo-tarjeta.component';
import { TruncatePipe } from './components/equipo/truncate.pipe';
import { JugadorListaComponent } from './components/jugador-lista/jugador-lista.component';
import { JugadorAdminComponent } from './components/jugador-admin/jugador-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    EquiposComponent,
    EquipoComponent,
    BuscadorComponent,
    JugadorComponent,
    JugadoresComponent,
    FilterlistPipe,
    TruncatePipe,
    EquipoTarjetaComponent,
    JugadorListaComponent,
    JugadorAdminComponent,
    ModalComponent,
    KeysPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [ModalComponent],
  providers: [EquiposService, JugadoresService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
