import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { NavbarComponent } from './navbar/navbar.component';
import { HealthinsuranceComponent } from './healthinsurance/healthinsurance.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HealthinsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
