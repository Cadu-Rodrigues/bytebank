import { Injectable } from '@angular/core';
import { Transferencia } from '../types/transferenciaModel';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private url = "http://localhost:3000/transferencias";

  constructor(private httpclient: HttpClient) {
  }

  getTransferencias(): Observable<Transferencia[]> {
    return this.httpclient.get<Transferencia[]>(this.url);
  }
  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    transferencia = this.hidratar(transferencia);
    return this.httpclient.post<Transferencia>(this.url,transferencia);
  }
  private hidratar(transferencia: Transferencia){
    const transferenciaHidratada = { ...transferencia, data: new Date() };
    return transferenciaHidratada;
  }
}
