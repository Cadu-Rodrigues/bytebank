import { Component, Input } from '@angular/core';
import { transferencia } from '../types/transferencia';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  @Input() transferencias: transferencia[] = [];
  
}
