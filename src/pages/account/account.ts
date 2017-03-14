import { Component, Inject } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  name: string;

  constructor(
    public navCtrl: NavController,
    public af: AngularFire,
    @Inject('firebase') private firebase,
  ) {}

}
