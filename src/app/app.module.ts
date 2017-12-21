
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent } from './certifications/certifications.component';

import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    SkillsComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
