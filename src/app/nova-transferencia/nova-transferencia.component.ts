import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../types/transferenciaModel';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  transferencia: Transferencia = {
    valor: undefined,
    destino: undefined,
    data: undefined,
  };
  constructor(private service: TransferenciasService, private router:Router) {}

  transferir() {
    console.log('Solicitada nova transferência');
    this.transferencia.data = new Date();
    this.service.adicionarTransferencia(this.transferencia).subscribe(
      {
        next: (resultado: Transferencia) => {
          console.log(resultado);
          this.router.navigateByUrl('extrato');
          this.limparCampos();
        },
        error: (error) =>{
          console.error(error);
        }
      }
    );
    this.limparCampos();
  }

  limparCampos() {
    this.transferencia = {
      valor: undefined,
      destino: undefined,
      data: undefined,
    };
  }
}
