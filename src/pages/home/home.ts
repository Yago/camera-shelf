import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BrandsPage } from '../brands/brands';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  brandsPage = BrandsPage;
  categories = [
    {
      name: "Analog cameras",
      slug: "analog_cameras",
    },
    {
      name: "Digital cameras",
      slug: "digital_cameras",
    },
    {
      name: "Lenses",
      slug: "lenses",
    },
    {
      name: "Films",
      slug: "films",
    }
  ]

  constructor(public navCtrl: NavController) {}

}
