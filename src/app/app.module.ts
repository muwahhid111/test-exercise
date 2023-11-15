import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import { IonicModule } from '@ionic/angular';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import {MatListModule} from '@angular/material/list';
import { Link1Component } from './components/link1/link1.component';
import { Link2Component } from './components/link2/link2.component';
import { Link3Component } from './components/link3/link3.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ModalWindowComponent,
    ListComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
