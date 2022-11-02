import { Component, OnInit } from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'app-header-left',
  templateUrl: './header-left.component.html',
  styleUrls: ['./header-left.component.scss']
})
export class HeaderLeftComponent implements OnInit {
  selectedItem = 'dark';
  constructor(private themeService: NbThemeService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onThemeSelect(event: any) {
    console.log(event);
    this.themeService.changeTheme(event);
  }
}
