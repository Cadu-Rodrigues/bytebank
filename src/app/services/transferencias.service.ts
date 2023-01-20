import { Injectable } from '@angular/core';
import { transferencia } from '../types/transferencia';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private listaTransferencias: transferencia[];

  constructor() {
    this.listaTransferencias = [];
  }

  getTransferencias(): transferencia[] {
    return this.listaTransferencias;
  }
  adicionarTransferencia(transferencia: transferencia): void {
    transferencia = this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }
  private hidratar(transferencia: transferencia){
    const transferenciaHidratada = { ...transferencia, data: new Date() };
    return transferenciaHidratada;
  }
}
