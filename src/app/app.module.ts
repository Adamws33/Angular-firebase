import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const firebaseConfig  = {
  apiKey: "AIzaSyAC9fE52KFSWs-wVkW53KagXET-UOebizc",
  authDomain: "simpleprojectangular.firebaseapp.com",
  databaseURL: "https://simpleprojectangular.firebaseio.com",
  projectId: "simpleprojectangular",
  storageBucket: "simpleprojectangular.appspot.com",
  messagingSenderId: "306773474043"
};

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
