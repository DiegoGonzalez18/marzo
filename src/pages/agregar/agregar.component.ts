import { Component, OnInit } from '@angular/core';
import { ListaItem} from '../../app/clases/lista-item';
import {Lista} from '../../app/clases/listas';
import { NavController,AlertController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {
    nombrelista: string='';
    nombreItem: string;
    items: ListaItem[] = [];
    mostrar:boolean;
    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _ListaDeseos: ListaDeseosService
    ) {
        this.mostrar= false;

     }

    ngOnInit(): void { }

    agregar(){
    if(this.nombreItem.length==0){
        
        return ;
    }
    let item = new ListaItem();
    item.nombre=this.nombreItem;
    this.items.push(item);
    this.nombreItem='';
    this.mostrar=true;
}
  eliminar(i:number){
 this.items.splice(i,1);
 if(this.items.length==0){
     this.mostrar=false;
 }
  }
  agregarLista(){
      if(this.nombrelista.length==0){
        const alert = this.alertCtrl.create({
            title: 'Nombre de la lista !',
            subTitle: 'El nombre de la lista es necesario!',
            buttons: ['OK']
          });
          alert.present();
          return;
      }
      let listica= new Lista(this.nombrelista);
        listica.items=this.items;
        this._ListaDeseos.agregarLista(listica);
        this.navCtrl.pop();
  }
   
}
