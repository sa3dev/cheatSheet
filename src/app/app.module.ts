import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LanguageProgrammationComponent } from './components/language-programmation/language-programmation.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HomeComponent } from './view/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainAdverstiserComponent } from './components/main-adverstiser/main-adverstiser.component';
import { LinkToResourceComponent } from './components/link-to-resource/link-to-resource.component';
import { TableListAppsComponent } from './components/table-list-apps/table-list-apps.component';
import { NavComponent } from './components/language-programmation/nav/nav.component';
import { FormsAddContentComponent } from './components/language-programmation/forms-add-content/forms-add-content.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LanguageProgrammationComponent,
    HomeComponent,
    NavbarComponent,
    MainAdverstiserComponent,
    LinkToResourceComponent,
    TableListAppsComponent,
    NavComponent,
    FormsAddContentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
