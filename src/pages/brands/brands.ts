import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Brands page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {
  category : string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    @Inject('pbase') private pbase,
  ) {}

  ionViewDidLoad() {
    this.category = this.navParams.data;
    this.pbase.getBrands();
  }

}
