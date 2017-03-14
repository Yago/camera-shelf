import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import config from '../config/config.json';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { BrandsPage } from '../pages/brands/brands';
import { ItemsPage } from '../pages/items/items';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/popover/popover';

import { DecadePipe } from '../pipes/decade.pipe';

import { PbaseService } from '../providers/pbase.service';
import { FiltersService } from '../providers/filters.service';
import { FirebaseService } from '../providers/firebase.service';

export const firebaseConfig = config.firebase;

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AccountPage,
    HomePage,
    BrandsPage,
    ItemsPage,
    TabsPage,
    PopoverPage,
    DecadePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AccountPage,
    HomePage,
    BrandsPage,
    ItemsPage,
    TabsPage,
    PopoverPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: 'pbase', useClass: PbaseService },
    { provide: 'filters', useClass: FiltersService },
    { provide: 'firebase', useClass: FirebaseService },
  ]
})
export class AppModule {}
