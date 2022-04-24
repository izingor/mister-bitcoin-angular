import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { UserComponent } from './cmps/user/user.component';
import {ContactsComponent } from './cmps/contacts/contacts.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BitcoinAppComponent,
    UserComponent,
    ContactsComponent,
    ContactPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
