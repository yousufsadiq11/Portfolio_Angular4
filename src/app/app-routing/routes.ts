import { Routes } from '@angular/router';

import { NavComponent } from '../nav/nav.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { CertificationsComponent } from '../certifications/certifications.component';

export const routes: Routes = [
  { path: 'home',  component: HomepageComponent },
  { path: 'education',     component: EducationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects',     component: ProjectsComponent },
  { path: 'experience',     component: ExperienceComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'about',     component: AboutComponent },
  { path: 'skills',     component: SkillsComponent },
  { path: 'certifications',     component: CertificationsComponent }
];
