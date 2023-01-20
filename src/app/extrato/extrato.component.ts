import { Component, Input } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../types/transferenciaModel';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  transferencias: Transferencia[] = [];
  constructor(private service: TransferenciasService){

  }
  
  ngOnInit(){
    this.transferencias = this.service.getTransferencias();
  }
}
