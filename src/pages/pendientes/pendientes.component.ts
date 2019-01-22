import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import {NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import {  DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {
     listaDeseos: any[] = []
    constructor( private _listaDeseos: ListaDeseosService,
                private _navController: NavController) { 
     this.listaDeseos= _listaDeseos.listas;
        
    }

    ngOnInit(): void { }

    irAgregar(){
this._navController.push(AgregarComponent);
    }
    verDetalle(lista,idx){
        this._navController.push(DetalleComponent , {
            lista,
             idx
        });
    }
}
