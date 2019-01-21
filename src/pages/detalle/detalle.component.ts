import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:any;
    constructor(
        public navCtrl: NavController,
        public navPrms: NavParams
    ) {
        this.idx=this.navPrms.get("idx");
        this.lista=this.navPrms.data.lista;
        console.log(this.idx);
    
     }

    ngOnInit(): void { }
}
