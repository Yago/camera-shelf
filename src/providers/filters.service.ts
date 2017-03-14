import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FiltersService {
  decade: string = 'all'

  constructor() {}

  decadeFilter(dec) {
    this.decade = dec;
  }

}
