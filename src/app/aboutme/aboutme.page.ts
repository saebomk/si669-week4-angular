import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.page.html',
  styleUrls: ['./aboutme.page.scss'],
})
export class AboutmePage implements OnInit {

  name: string = "";
  birthMonth: string = "";
  birthDay: string = "";
  days: any[];

  constructor(public storage: Storage, public router: Router, public navCtrl: NavController) {
    this.days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                 "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
                 "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    this.storage.get("aboutMeData").then((aboutMeData) => {
      this.name = aboutMeData["name"];
      this.birthMonth = aboutMeData["birthMonth"];
      this.birthDay = aboutMeData["birthDay"];
    });
  }

  ngOnInit() {
  }

  SaveAndgoBack() {
    this.navCtrl.navigateBack("/home");
    let aboutMeData = {
      "name": this.name,
      "birthMonth": this.birthMonth,
      "birthDay": this.birthDay
    };
    this.storage.set("aboutMeData", aboutMeData);
  }

  SaveAndgoToCake() {
    this.navCtrl.navigateForward('/cake');
    let aboutMeData = {
      "name": this.name,
      "birthMonth": this.birthMonth,
      "birthDay": this.birthDay
    };
    this.storage.set("aboutMeData", aboutMeData);
  }
}
