import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//nuestros componentes
import { HomeComponent } from './components/home.component';
import { CityCreateComponent } from './components/city/city-create.component';
import { CityListComponent } from './components/city/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityCreateComponent,
    CityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
