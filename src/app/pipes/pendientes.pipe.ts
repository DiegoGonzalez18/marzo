import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
    name: 'pendientes',
    pure:false
})
export class PendientePipe implements PipeTransform {
    transform(listas: Lista[], completa:boolean = false): Lista[] {
        let nuevaLista:Lista[]=[];
        for(let lista of listas){
            if(lista.terminada==completa){
                nuevaLista.push(lista);
            }
        }
        return nuevaLista;
    }
}