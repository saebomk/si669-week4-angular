import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  name: string;
  birthMonth: string;
  birthDay: string;
  cakeType: string;
  frosting: string;
  glutenFree: boolean;

  constructor(public storage: Storage, public router: Router, public navCtrl: NavController) {
    this.storage.get("aboutMeData").then((aboutMeData) => {
      this.name = aboutMeData["name"];
      this.birthMonth = aboutMeData["birthMonth"];
      this.birthDay = aboutMeData["birthDay"];
    });
    this.storage.get("cakeData").then((cakeData) => {
      this.cakeType = cakeData["cakeType"];
      this.frosting = cakeData["frosting"];
      this.glutenFree = cakeData["glutenFree"];
    });
  }

  ngOnInit() {
  }

  SaveAndgoBack() {
    this.navCtrl.navigateBack("/cake");
  }

  SaveAndgoToHome() {
    this.navCtrl.navigateForward('/home');
  }

}
