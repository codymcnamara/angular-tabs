import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../tabdata';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() isActive: boolean | undefined;
  @Input() tab: Item | undefined;
  @Output() changeActive = new EventEmitter();
}
