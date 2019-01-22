import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import {PendientesComponent} from '../pages/pendientes/pendientes.component';
import { TerminadasComponent} from '../pages/terminadas/terminadas.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { PlaceholderPipe} from '../app/pipes/placeholder.pipe';
import { DetalleComponent } from '../pages/detalle/detalle.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaDeseosService } from './services/lista-deseos.service';
import {PendientePipe} from '../app/pipes/pendientes.pipe';

@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipe,
    PendientePipe,
    PendientesComponent,
    TerminadasComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadasComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
