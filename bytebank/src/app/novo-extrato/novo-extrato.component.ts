import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-extrato',
  templateUrl: './novo-extrato.component.html',
  styleUrls: ['./novo-extrato.component.scss']
})
export class NovoExtratoComponent implements OnInit {

  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
