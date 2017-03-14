import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFire, AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  private authState: FirebaseAuthState;

  constructor(
    public auth$: AngularFireAuth,
    public af: AngularFire,
    public toastCtrl: ToastController,
  ) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  login(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.google.displayName;
    } else {
      return '';
    }
  }

  addItem(item, category) {
    this.af.database.object(`users/${this.authState.uid}/${category}/${item.id}`).set(item).then(() => {
      let toast = this.toastCtrl.create({
        message: `${item.name} was added successfully !`,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    });
  }

}
