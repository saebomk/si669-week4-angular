import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.page.html',
  styleUrls: ['./cake.page.scss'],
})
export class CakePage implements OnInit {

  cakeType: string = "";
  frosting: string = "";
  glutenFree: boolean = false;

  constructor(public storage: Storage, public router: Router, public navCtrl: NavController) {
    this.storage.get("cakeData").then((cakeData) => {
      this.cakeType = cakeData["cakeType"];
      this.frosting = cakeData["frosting"];
      this.glutenFree = cakeData["glutenFree"];
    });
  }

  ngOnInit() {
  }

  SaveAndgoBack() {
    this.navCtrl.navigateBack("/aboutme");
    let cakeData = {
      "cakeType": this.cakeType,
      "frosting": this.frosting,
      "glutenFree": this.glutenFree
    };
    this.storage.set("cakeData", cakeData);
  }

  SaveAndgoToConfirm() {
    this.navCtrl.navigateForward('/confirm');
    let cakeData = {
      "cakeType": this.cakeType,
      "frosting": this.frosting,
      "glutenFree": this.glutenFree
    };
    this.storage.set("cakeData", cakeData);
  }
}
