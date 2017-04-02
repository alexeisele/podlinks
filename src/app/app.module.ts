import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { SidenavModule } from './sidenav/sidenav.module';

export const firebaseConfig = {
  apiKey: "AIzaSyA0vbim_0qphQx66Q8fovBB7J9sSdSvO9U",
  authDomain: "podlinks.firebaseapp.com",
  databaseURL: "https://podlinks.firebaseio.com",
  storageBucket: "project-6265156048663464020.appspot.com",
  messagingSenderId: "1074405064697"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    HeaderModule,
    ContentModule,
    SidenavModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
