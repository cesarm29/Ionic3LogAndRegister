import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://localhost:3000/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  //send data to ws register user
  createUser(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      let options = new RequestOptions({
        headers: headers
      });
      // json 
      let body = 'username=' + credentials.username + '&password=' + credentials.password + '&email=' + credentials.email + '&name=' + credentials.name;
      this.http.post(apiUrl + type, body, options).
        subscribe(res => {
          resolve(res.json())
        }), (err) => {
          reject(err);
        }
    })
  }

    //send data to ws login user
    loginUser(credentials, type) {
      return new Promise((resolve, reject) => {
        let headers = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
          headers: headers
        });
        // json 
        let body = 'username=' + credentials.username + '&password=' + credentials.password ;
        this.http.post(apiUrl + type, body, options).
          subscribe(res => {
            resolve(res.json())
          }), (err) => {
            reject(err);
          }
      })
    }

}
