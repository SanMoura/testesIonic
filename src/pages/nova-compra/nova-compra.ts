import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';



@IonicPage()
@Component({
  selector: 'page-nova-compra',
  templateUrl: 'nova-compra.html',
})
export class NovaCompraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaCompraPage');
  }

  opcoesProduto(produto){
    let Modal = this.modalCtrl.create(DetalheProdutoPage,{produto:produto});

    console.log(produto);

    Modal.present();

    Modal.onDidDismiss(data => {  

      console.log(data);

    });

  }

  private passaProduto(): string {
    return 'userParams';
  }
}
