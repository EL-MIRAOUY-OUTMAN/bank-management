import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import {ComptesComponent} from "./components/comptes/comptes.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NewClientComponent } from './components/new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ComptesComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
