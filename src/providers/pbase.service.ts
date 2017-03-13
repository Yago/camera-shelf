import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import config from '../config/config.json';

/*
  Generated class for the PbaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PbaseService {

  brands = [];

  constructor(public http: Http) {}

  getBrands() {
    if (this.brands.length > 0) {
      return Promise.resolve(this.brands);
    }

    return new Promise(resolve => {
      this.http.get(`${config.api.url}/brands`)
        .map(res => res.json())
        .subscribe(data => {
          this.brands = data;
          resolve(this.brands);
        });
    });
  }

}
