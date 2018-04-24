import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers :[
    MoovieProvider
  ]
})
export class FeedPage {

  objetoFeed = {
    titulo: "Emerson Alexandre",
    data: "May 7, 1996",
    descricao: "Estou criando um app incrível",
    qtd_likes: 12,
    qtd_comments: 4,
    time_comment: "11h ago"
  }
  nomeUsuario:string = "Emerson Alexandre";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1: number, num2: number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    // this.somaDoisNumeros(10, 99);
  }

}
