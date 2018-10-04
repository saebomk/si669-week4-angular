import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  name: string = "";
  birthMonth: string = "";
  birthDay: string = "";
  cakeType: string = "";
  frosting: string = "";

  constructor( public storage: Storage, public router: Router, public navCtrl: NavController ) {

    this.name = localStorage.getItem("name");
    this.birthMonth = localStorage.getItem("birthMonth");
    this.birthDay = localStorage.getItem("birthDay");
    this.cakeType = localStorage.getItem("cakeType");
    this.frosting = localStorage.getItem("frosting");

    if ((this.name && this.birthMonth && this.birthDay && this.cakeType && this.frosting) != ""){
      this.navCtrl.navigateRoot('/home');
    }

  }

  goToAboutMe() {
    this.navCtrl.navigateForward('/aboutme');
  }

}
