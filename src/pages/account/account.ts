import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  name: string
  items: any

  constructor(
    public navCtrl: NavController,
    private db: AngularFireDatabase,
    @Inject('firebase') private firebase,
  ) {
    db.object(`users`).subscribe((snapshot) => {
      this.items = snapshot[firebase.uid];
    });
  }
}
