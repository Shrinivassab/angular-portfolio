import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLeftComponent } from './header-left/header-left.component';
import { HeaderRightComponent } from './header-right/header-right.component';
import {NbCardModule, NbIconModule, NbSelectModule} from '@nebular/theme';
import {MatRippleModule} from '@angular/material/core';



@NgModule({
  declarations: [
    HeaderLeftComponent,
    HeaderRightComponent
  ],
  exports: [
    HeaderLeftComponent,
    HeaderRightComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbCardModule,
    NbSelectModule,
    MatRippleModule,
  ]
})
export class HeaderModule { }
