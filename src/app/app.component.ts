import { Component } from '@angular/core';
import { Item, items } from './tabdata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tabs';
  tabItems: Item[] | [];
  activeItem: Item;

  constructor() {
    this.tabItems = items;
    this.activeItem = items[0];
  }

  onChangeActive(tab: Item) {
    this.activeItem = tab;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
