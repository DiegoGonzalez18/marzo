import { Component } from '@angular/core';



import { PendientesComponent} from '../pendientes/pendientes.component';
import {TerminadasComponent} from '../terminadas/terminadas.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadasComponent;


  constructor() {

  }
}
