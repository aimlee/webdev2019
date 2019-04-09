import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactsComponent } from './contacts/contacts.component';
import { TopFootComponent } from './top-foot/top-foot.component';
import { TopPageComponent } from './top-page/top-page.component';
import { FootPageComponent } from './foot-page/foot-page.component';

@NgModule({
  declarations: [
    AppComponent,

    ContactsComponent,

    TopFootComponent,

    TopPageComponent,

    FootPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
