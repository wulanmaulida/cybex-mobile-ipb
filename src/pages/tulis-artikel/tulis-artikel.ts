import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TulisArtikel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tulis-artikel',
  templateUrl: 'tulis-artikel.html'
})
export class TulisArtikelPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TulisArtikelPage Page');
  }

}