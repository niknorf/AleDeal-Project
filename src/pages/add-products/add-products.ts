import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProductProvider } from '../../providers/addproduct/addproduct' 

/**
 * Generated class for the AddProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-products',
  templateUrl: 'add-products.html',
})
export class AddProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public addproductProvider: AddProductProvider) {
  }

      // Creates the log entry to the database and directs user back to main screen.
    addProduct(Header: string, Description: string): void {
      this.addproductProvider
        .createLog(Header, Description)
        .then(newProduct => {
          this.navCtrl.setRoot('HomePage');
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

}
