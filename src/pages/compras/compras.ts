import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovaCompraPage } from '../nova-compra/nova-compra';


@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  abreNovaLista(){
    this.navCtrl.push(NovaCompraPage,{dataTeste: 'variavel'}); 
  }

}
