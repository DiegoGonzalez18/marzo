import { Component, OnInit } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { Lista } from '../../app/clases/listas';
import { ListaItem} from '../../app/clases/lista-item';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:any;
    constructor(
        public navCtrl: NavController,
        public navPrms: NavParams,
        public _listaDeseosService: ListaDeseosService,
        public alertCtrl: AlertController
    ) {
        this.idx=this.navPrms.get("idx");
        this.lista=this.navPrms.data.lista;
        console.log(this.idx);
    
     }
        actualizar(item: ListaItem){
            
            item.completado=!item.completado;
            let todosMarcados=true;
           let cont=this.lista.items.length;
           let a=0;
           for(let item of this.lista.items){
               if(item.completado){
                    a++;
               }
           }
           if(a==cont){
               this.lista.terminada=true;

           }else{
            this.lista.terminada=false;
           }
         
          
           console.log("n " + cont + "s " + a);
            this._listaDeseosService.actualizarData();

        }
        eliminarLista(){
            let confirm=this.alertCtrl.create({
                title:this.lista.nombre,
                message:'¿Está seguro que desea eliminar la lista',
                buttons:[
                    {
                        text:'Cancelar',
                        handler: () =>{
                            console.log('nada');
                        }
                    },{
                        text:'Eliminar',
                        handler: () => {
                            this._listaDeseosService.eliminarLista(this.idx);
                            this.navCtrl.pop();
                        }
                    }
                ]
            });
            confirm.present();
        }
    ngOnInit(): void { }
}
