import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Inbox } from '../pages/inbox/inbox';

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
      public menu: MenuController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // Pages generated in Ionic
    this.pages = [
      { title: 'Inbox', component: Inbox},
    ]
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}

