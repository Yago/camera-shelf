import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  name: string;

  constructor(
    public navCtrl: NavController,
    @Inject('firebase') private firebase,
  ) {}

}
