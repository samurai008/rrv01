import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Inbox } from '../pages/inbox/inbox';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;

  constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      public menu: MenuController,
      public modalCtrl: ModalController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // Pages generated in Ionic
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Inbox', component: Inbox},
    ]
  }

  presentModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}

