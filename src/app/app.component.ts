import { Component } from '@angular/core';
import { transferencia } from './types/transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: transferencia = {valor: undefined, destino: undefined};

  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }
}
