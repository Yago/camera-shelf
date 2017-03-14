import { Component, Inject } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

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
    @Inject('pbase') private pbase,
    @Inject('filters') private filters,
  ) {}

  ionViewDidLoad() {
    this.category = this.navParams.data[0];
    this.brand = this.navParams.data[1];
    this.pbase.getItems(this.category.slug, this.brand.slug).then((data) => {
      this.items = [...data];
    });
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
