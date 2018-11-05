import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;
  userData = { "username": "", "password": "" }

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginIn() {
    //api ws login user
    this.authService.loginUser(this.userData, "login").then((result) => {
      this.responseData = result;
      if(this.responseData.respuesta == "Success"){
        //redirection to home
        this.navCtrl.push(HomePage);
      }else{
        //for error redirection to login 
        this.navCtrl.push(LoginPage);
      }
    }, (err) => {
      //connection failed message 
    });
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}
