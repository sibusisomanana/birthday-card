import { Component } from '@angular/core';
 import { NavController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 toggle: boolean;
 
 database=firebase.firestore();
 Items=[];

 item = {
  name:"",
  price:null,
  quantity:0,
  
 }
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }
  expandDiv(){
    this.toggle = !this.toggle;
  }
addData(){
  this.database.collection("Item").doc().set(this.item).then(res => {
    this.toastCtrl.create({
      message: 'Item added',
      duration: 2000
    }).present()
  }).catch(err => {
    this.toastCtrl.create({
      message: 'Error adding item',
      duration: 2000
    }).present()
  })
}
incrementQ(){
  this.item.quantity = this.item.quantity + 1
}
decrementQ(){
  this.item.quantity = this.item.quantity - 1
}
}