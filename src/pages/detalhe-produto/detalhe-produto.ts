import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController , ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController , public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProdutoPage');
    
  }

  
  

  fecharDetalhe(qtdProduto, precoProduto) {
    this.viewCtrl.dismiss({ qtdProduto: qtdProduto, precoProduto: precoProduto });
  }

  
}
