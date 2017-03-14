import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAuth, FirebaseAuthState } from 'angularfire2';

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
    public auth$: AngularFireAuth,
    @Inject('firebase') private firebase,
  ) {
    auth$.subscribe((state: FirebaseAuthState) => {
      if (state) {
        db.object(`users`).subscribe((snapshot) => {
          this.items = snapshot[firebase.uid];
        });
      }
    });
  }
}
