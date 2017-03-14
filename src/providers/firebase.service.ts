import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { AngularFire, AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  private authState: FirebaseAuthState;
  uid: string

  constructor(
    public auth$: AngularFireAuth,
    public af: AngularFire,
    public toastCtrl: ToastController,
  ) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      this.uid = state.uid;
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
    if (this.authState != null) {
      this.af.database.object(`users/${this.authState.uid}/${category}/${item.id}`).set(item).then(() => {
        let toast = this.toastCtrl.create({
          message: `${item.name} was added successfully !`,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      });
    } else {
      let toast = this.toastCtrl.create({
        message: `Warning ! To need to log first.`,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

  removeItem(item, category) {
    if (this.authState != null) {
      this.af.database.object(`users/${this.authState.uid}/${category}/${item.id}`).remove().then(() => {
        let toast = this.toastCtrl.create({
          message: `${item.name} was removed successfully !`,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      });
    }
  }

}
