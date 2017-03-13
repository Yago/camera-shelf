import { Component, Inject, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    @Inject('pbase') private pbase,
  ) {}

  ngOnInit() {
    console.log(this.pbase.brands)
    this.pbase.getBrands();
  }

}
