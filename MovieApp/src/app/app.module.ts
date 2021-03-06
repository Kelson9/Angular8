import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FindComponent } from './find/find.component';
import { HeaderComponent } from './header/header.component';
import {ApiService} from './api.service';
import { PopularmoviesComponent } from './home/popularmovies/popularmovies.component';
import { TheatremoviesComponent } from './home/theatremovies/theatremovies.component';
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindComponent,
    HeaderComponent,
    PopularmoviesComponent,
    TheatremoviesComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
