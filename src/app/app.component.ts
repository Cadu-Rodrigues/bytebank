import { Component } from '@angular/core';
import { transferencia } from './types/transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: transferencia[] = [];

  transferir($event: any){
    console.log($event);
    this.transferencias.push($event);
  }
}
