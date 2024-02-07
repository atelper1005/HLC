import { Component } from '@angular/core';
import {Cancion} from '../cancion'
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cancionEditando = {} as Cancion;

  arrayColeccionCanciones:any = [{
    id: "",
    cancion: {} as Cancion
  }];

  idCancionSelec: string = "";

  constructor(private firestoreService: FirestoreService, private router: Router) {
    this.obtenerListaCanciones();
  }

  obtenerListaCanciones() {
    // Hacer una consulta cada vez que se detectan nuevos datos en la BD
    this.firestoreService.consultar("canciones").subscribe((datosRecibidos) => {
      // Limpiar el array para que no se dupliquen los datos anteriores
      this.arrayColeccionCanciones = [];
      // Recorrer todos los datos recibidos de la BD
      datosRecibidos.forEach((datosCancion) => {
        // Cada elemento de la BD se almacena en el array que se muestra en pantalla
        this.arrayColeccionCanciones.push({
          id: datosCancion.payload.doc.id,
          cancion: datosCancion.payload.doc.data()
        })
      });
    });
  }

  selecCancion(idCancion:string, cancionSelec:Cancion) {
    this.cancionEditando = cancionSelec;
    this.idCancionSelec = idCancion;
    this.router.navigate(["detalle", this.idCancionSelec])
  }

  clickBotonAddCancion(){
    this.router.navigate(['detalle','nuevo']);
  }

}
