import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  brand: Object = {
    name: '',
    slug: '',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    @Inject('pbase') private pbase,
  ) {}

  ionViewDidLoad() {
    this.brand = this.navParams.data;
    // this.pbase.getBrands();
  }

}
