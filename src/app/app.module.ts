import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ExperienceComponent } from './dashboard/experience/experience.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SkillsComponent } from './dashboard/skills/skills.component';
import { ContactComponent } from './dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashboardComponent,
    FooterComponent,
    ExperienceComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
