import { superVisior } from './../../../common/index';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public-view';
  constructor() {
    const my = new superVisior('Mykola');
    my.log();
  }
}
