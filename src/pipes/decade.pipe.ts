import { Pipe } from '@angular/core';

@Pipe({
  name: 'decade'
})
export class DecadePipe {
  transform(value, args) {
    if (args === 'all') {
      return value;
    } else {
      return value.filter((item) => {
        return String(item.year).substring(0, 3) === String(args);
      });
    }
  }
}
