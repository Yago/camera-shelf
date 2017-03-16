import { Component, Inject } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {
  brands: any
  itemsPage = ItemsPage

  category: Object = {
    name: '',
    slug: '',
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    @Inject('pbase') private pbase,
  ) {}

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Load brands...'
    });
    loading.present();

    this.category = this.navParams.data;
    this.pbase.getBrands().then((data) => {
      this.brands = [...this.pbase.brands];
      loading.dismiss();
    });
  }

  findBrand(event) {
    const query = event.target.value || '';
    this.brands = this.pbase.brands.filter((brand) => {
      return brand.name.toLowerCase().includes(query.toLowerCase());
    })
  }

}
