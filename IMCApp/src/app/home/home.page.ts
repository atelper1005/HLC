import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  altura: number = 0;
  peso: number = 0;
  imcResultado: number = 0;

  constructor() {

  }

  reiniciar() {
    this.altura = 0;
    this.peso = 0;
    this.imcResultado = 0;
  }

  calcularIMC() {
    if (this.altura && this.peso) {
      const alturaMetros = this.altura / 100;
      this.imcResultado = this.peso / (alturaMetros * alturaMetros);
      this.imcResultado = parseFloat(this.imcResultado.toFixed(2));
    }
  }

}
