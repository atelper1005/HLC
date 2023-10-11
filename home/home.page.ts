import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numSecreto: number =  0;
  numUsuario: number = 0;
  txtMensaje: string = "";
  esCorrecto: boolean = false;

  constructor() {
    this.generarNumSecreto();
  }

  reiniciar() {
    this.generarNumSecreto;
    this.numUsuario = 0;
    this.esCorrecto = false;
    this.txtMensaje = "";
  }

  comprobarNumero() {
    console.log("clic en botón");
    console.log("numUsuario = " + this.numUsuario);
    if(this.numSecreto == this.numUsuario) {
      console.log("Has acertado");
      this.txtMensaje = "¡Has acertado!";
      this.esCorrecto = true;
    } else if(this.numSecreto > this.numUsuario) {
      console.log("El número Secreto es mayor")
      this.txtMensaje = "¡El número Secreto es mayor!";
    } else {
      console.log("El número Secreto es menor")
      this.txtMensaje = "¡El número Secreto es menor!";
    }
  }

  generarNumSecreto() {
    this.numSecreto = Math.floor(Math.random() * 100 + 1);
    console.log("El número secreto es " + this.numSecreto);
  }

}
