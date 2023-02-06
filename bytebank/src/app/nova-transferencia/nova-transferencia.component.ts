import { Transferencia } from './../../models/transferencia';
import { TransferenciaService } from 'src/services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private serviceTransferencia: TransferenciaService,
    private router: Router,
  ) { }

  transferir() {
    console.log('Solicitação nova transferência');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.serviceTransferencia.addNovaTransferencia(valorEmitir).subscribe(
      (result) => {
        console.log(result);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
