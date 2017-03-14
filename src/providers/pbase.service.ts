import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import config from '../config/config.json';

@Injectable()
export class PbaseService {

  brands = []
  items = {}

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

  getItems(category, brand) {
    if (this.items[brand] && this.items[brand][category]) {
      return Promise.resolve(this.items[brand][category]);
    }

    // console.log(`${config.api.url}/${brand}/${category}`);

    return new Promise(resolve => {
      this.http.get(`${config.api.url}/${brand}/${category}`)
        .map(res => res.json())
        .subscribe(data => {
          this.items[brand] = { [category]: data };
          resolve(this.items[brand][category]);
        });
    });
  }

}
