import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
declare let codePush,InstallMode: any; 
document.addEventListener("resume", function () {
  //codePush.sync();
  codePush.sync(null, { updateDialog: true, installMode: InstallMode.IMMEDIATE });
});
window.addEventListener("load", function () {
  //codePush.sync();
  codePush.sync(null, { updateDialog: true, installMode: InstallMode.IMMEDIATE });
});
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
