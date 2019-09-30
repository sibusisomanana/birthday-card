import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 toggle: boolean;

  constructor(public navCtrl: NavController) {

  }
  expandDiv(){
    this.toggle = !this.toggle;
  }

}
