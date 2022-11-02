import {Component, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio';

  constructor(private themeService: NbThemeService) {
  }

  ngOnInit(): void {
    this.changeTheme();
  }

  private changeTheme(): void {
    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        console.log(`Theme changed to ${theme.name}`);
      });
  }
}
