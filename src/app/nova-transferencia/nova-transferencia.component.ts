import { Component, EventEmitter, Output } from '@angular/core';
import { transferencia } from '../types/transferencia';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  transferencia: transferencia = { valor:undefined, destino:undefined};
  
  @Output() aoTransferir = new EventEmitter<any>();

  transferir () {
    console.log("Solicitada nova transferência");
    this.aoTransferir.emit(this.transferencia);
    this.limparCampos();
  }

  limparCampos(){
    this.transferencia = { valor:undefined, destino:undefined};
  }
}
