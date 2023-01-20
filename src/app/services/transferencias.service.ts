import { Injectable } from '@angular/core';
import { Transferencia } from '../types/transferenciaModel';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private listaTransferencias: Transferencia[];

  constructor() {
    this.listaTransferencias = [];
  }

  getTransferencias(): Transferencia[] {
    return this.listaTransferencias;
  }
  adicionarTransferencia(transferencia: Transferencia): void {
    transferencia = this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }
  private hidratar(transferencia: Transferencia){
    const transferenciaHidratada = { ...transferencia, data: new Date() };
    return transferenciaHidratada;
  }
}
