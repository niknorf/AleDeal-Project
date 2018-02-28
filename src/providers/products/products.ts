import { Injectable } from '@angular/core';
// Firebase.
import firebase from 'firebase';

@Injectable()
export class ProductsProvider {

  // Reference to the loglist in database.
  public productsRef: firebase.database.Reference;

  // Added log entries from user goes here.
  constructor() {
        this.productsRef = firebase
          .database()
          .ref(`/products`);
  }

  // Creates the log entry.
  createLog(Header: string, Description: string): firebase.database.ThenableReference {
    return this.productsRef.push({
      header: Header,
      description: Description
    });
  }

  // Gets the log entries from the referred list.
  getProducts(): firebase.database.Reference {
    return this.productsRef;
  }

  // Gets the details of the specific log entry.
  getProductsDetail(productId: string): firebase.database.Reference {
    return this.productsRef.child(productId);
  }

}