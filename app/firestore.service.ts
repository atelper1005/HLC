import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore, private angularFireStorage: AngularFireStorage) { }

  //Insertar elemento
  public insertar(coleccion:any, datos:any) {
    return this.angularFirestore.collection(coleccion).add(datos);
  }

  //Consultar elemento
  public consultar(coleccion:any) { 
    return this.angularFirestore.collection(coleccion).snapshotChanges();
  }

  //Borrar elemento
  public borrar(coleccion:any, documentId:any) {
    return this.angularFirestore.collection(coleccion).doc(documentId).delete();
  }

  //Actualizar elemento
  public modificar(coleccion:any, documentId:any, datos:any) {
    return this.angularFirestore.collection(coleccion).doc(documentId).set(datos);
   }

   //Consultar por id
   public consultarPorId(coleccion:any, documentId:any) {
    return this.angularFirestore.collection(coleccion).doc(documentId).snapshotChanges();
  }

  //Subir imagen a Firestore
  public subirImagenBase64(nombreCarpeta:string, nombreArchivo:string, imagenBase64:string){
    let storageRef = this.angularFireStorage.ref(nombreCarpeta).child(nombreArchivo);
    return storageRef.putString(imagenBase64, 'data_url');
  }

  //Borrar archivo FirestoreStorage
  public eliminarArchivoPorUrl(url:string){
    return this.angularFireStorage.storage.refFromURL(url).delete();
  }
}
