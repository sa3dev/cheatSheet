import { LanguageProgrammationComponent } from './components/language-programmation/language-programmation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DefaultViewComponent } from './view/default-view/default-view.component';

const routes: Routes = [
  { path: '' , redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home' , component: DefaultViewComponent , children: 
    [ 
      { path: 'home/:language' , component: LanguageProgrammationComponent }
    ]
  },
  { path: 'home/:language' , component: LanguageProgrammationComponent },
  { path: 'dashboard' , component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
