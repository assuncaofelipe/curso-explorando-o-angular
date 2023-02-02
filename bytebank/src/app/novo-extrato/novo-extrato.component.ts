import { Transferencia } from './../../models/transferencia';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';

@Component({
  selector: 'app-novo-extrato',
  templateUrl: './novo-extrato.component.html',
  styleUrls: ['./novo-extrato.component.scss']
})
export class NovoExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(
    private serviceTransferencias: TransferenciaService,
  ) { }

  ngOnInit(): void {
    this.serviceTransferencias.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
