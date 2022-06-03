import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToUrl(): void {
    this.document.location.href = 'https://pf-iniciosesion.000webhostapp.com/';
  }

}
