import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../dashboard/about/about.component';
import { ExperienceComponent } from '../dashboard/experience/experience.component';
import { ProjectsComponent } from '../dashboard/projects/projects.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { SkillsComponent } from '../dashboard/skills/skills.component';
import { ContactComponent } from '../dashboard/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
