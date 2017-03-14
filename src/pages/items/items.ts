import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  category = {
    name: '',
    slug: '',
  }

  brand = {
    name: '',
    slug: '',
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    @Inject('pbase') private pbase,
  ) {}

  ionViewDidLoad() {
    this.category = this.navParams.data[0];
    this.brand = this.navParams.data[1];
    this.pbase.getItems(this.category.slug, this.brand.slug);
  }

}
