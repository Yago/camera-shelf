import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html'
})
export class BrandsPage {
  brands = []
  category: Object = {
    name: '',
    slug: '',
  }
  itemsPage = ItemsPage

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    @Inject('pbase') private pbase,
  ) {}

  ionViewDidLoad() {
    this.category = this.navParams.data;
    this.pbase.getBrands().then((data) => {
      this.brands = data;
    });
  }

  findBrand(event) {
    const query = event.target.value || '';
    this.brands = this.pbase.brands.filter((brand) => {
      return brand.name.toLowerCase().includes(query.toLowerCase());
    })
  }

}
