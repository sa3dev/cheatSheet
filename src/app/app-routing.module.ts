import { FormsAddContentComponent } from './components/language-programmation/forms-add-content/forms-add-content.component';
import { HomeComponent } from './view/home/home.component';
import { LanguageProgrammationComponent } from './components/language-programmation/language-programmation.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '' , redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home' , component: HomeComponent , children: 
    [ 
      { path: 'home/:language' , component: LanguageProgrammationComponent }
    ]
  },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'dashboard/language/:language' , component: LanguageProgrammationComponent },
  { path: 'dashboard/content/:language' , component: FormsAddContentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
