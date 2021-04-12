import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['./home']},
      {label: 'Skills', icon: 'pi pi-fw pi-calendar', routerLink: ['./skills']},
      {label: 'About', icon: 'pi pi-fw pi-pencil', routerLink: ['./about']},
      {label: 'Projects', icon: 'pi pi-fw pi-file', routerLink: ['./projects']},
      {label: 'Experience', icon: 'pi pi-fw pi-file', routerLink: ['./experience']},
      {label: 'Contact', icon: 'pi pi-fw pi-cog', routerLink: ['./contact']}
    ];

    this.activeItem = this.items[0];
  }

}
