import { Pipe } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe {
  transform(value, args) {
    return Object.keys(value);
  }
}
