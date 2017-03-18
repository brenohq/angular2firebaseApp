import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBX2EhPqKvaJVKHEhHn8FwH8Aevau4Xg0c",
  authDomain: "angular2firebaseapp-92f1a.firebaseapp.com",
  databaseURL: "https://angular2firebaseapp-92f1a.firebaseio.com",
  storageBucket: "angular2firebaseapp-92f1a.appspot.com",
  messagingSenderId: "1073690120437"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: 'edit-listing/:id', component: EditListingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
