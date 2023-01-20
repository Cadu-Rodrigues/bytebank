import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';
import { transferencia } from './types/transferencia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
}
