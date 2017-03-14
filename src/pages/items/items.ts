import { Component, Inject } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html'
})
export class ItemsPage {
  items: any

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
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    @Inject('pbase') private pbase,
    @Inject('filters') private filters,
  ) {}

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Load items...'
    });
    loading.present();

    this.category = this.navParams.data[0];
    this.brand = this.navParams.data[1];
    this.pbase.getItems(this.category.slug, this.brand.slug).then((data) => {
      this.items = [...data];
      loading.dismiss();
    });
    this.filters.decade = 'all';
  }

  findItem(event) {
    const query = event.target.value || '';
    this.items = this.pbase.items[this.brand.slug][this.category.slug].filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    })
  }

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage, {
      category: this.category.slug,
      items: this.items
    });

    popover.present({
      ev: event
    });
  }

}
