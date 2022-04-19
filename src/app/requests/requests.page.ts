import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  subscription: any;
  switchTab = 'pick'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }

  constructor(public platform: Platform) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(
      -1,
      () => {
        // tslint:disable-next-line: triple-equals
        if (window.location.pathname == '/requests') {
          navigator['app'].exitApp();
        } else {
          return;
        }
      }

    );
  }

}
