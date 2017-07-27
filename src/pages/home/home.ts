import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image_dir: string = '../assets/stock-images/'

  constructor(public navCtrl: NavController) {

  }

}
