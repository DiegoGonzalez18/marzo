import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import {NavController } from 'ionic-angular';
import {  DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-terminadas',
    templateUrl: 'terminadas.component.html'
})
export class TerminadasComponent implements OnInit {
    listaDeseos: any[] = []
    constructor( private _listaDeseos: ListaDeseosService,
                private _navController: NavController) { 
     this.listaDeseos= _listaDeseos.listas;
        
    }
    ngOnInit(): void { }
    verDetalle(lista,idx){
        this._navController.push(DetalleComponent , {
            lista,
             idx
        });
}
}
