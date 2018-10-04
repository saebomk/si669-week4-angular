import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  resetData() {
    this.storage.get("aboutMeData").then((aboutMeData) => {
      aboutMeData["name"] = null;
      aboutMeData["birthMonth"] = null;
      aboutMeData["birthDay"] = null;
    });
    this.storage.get("cakeData").then((cakeData) => {
      cakeData["cakeType"] = null;
      cakeData["frosting"] = null;
      cakeData["glutenFree"] = null;
    });
  }


  // AlertConfirm() {
    // this.navCtrl.navigateForward('/aboutme');
  // }

  goToAboutMe() {
    this.navCtrl.navigateForward('/aboutme');
  }
}
