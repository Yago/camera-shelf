import { Component, Inject } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {
  data: any
  items: any

  constructor(
    public viewCtrl: ViewController,
    private navParams: NavParams,
    @Inject('pbase') private pbase,
    @Inject('filters') private filters,
  ) {}

  ngOnInit() {
    this.data = this.navParams.data;
    this.items = this.navParams.data.items;
  }

}
