import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
 import { DataProvider } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  products: any=0;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public navParams: NavParams, public modalCtrl: ModalController) {

  	this.dataService.getByID(this.navParams.get('id')).then(result => {
      this.products = result;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
