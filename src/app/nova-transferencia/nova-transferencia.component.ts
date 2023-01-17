import { Component, EventEmitter, Output } from '@angular/core';
import { transferencia } from '../types/transferencia';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor?: transferencia;
  destino?: transferencia;
  
  @Output() aoTransferir = new EventEmitter<any>();

  transferir () {
    console.log("Solicitada nova transferência");
    const valorEmitir = {valor: this.valor ,destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = undefined;
    this.destino = undefined;
  }
}
