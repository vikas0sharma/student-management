import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabTitle;
  active:boolean;
  constructor(tabs: TabsComponent) {
    tabs.addTab(this)
  }

  ngOnInit() {
  }

}
