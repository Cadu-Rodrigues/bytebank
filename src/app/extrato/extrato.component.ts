import { Component, Input } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { transferencia } from '../types/transferencia';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  transferencias: transferencia[] = [];
  constructor(private service: TransferenciasService){

  }
  
  ngOnInit(){
    this.transferencias = this.service.getTransferencias();
  }
}
