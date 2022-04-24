import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { UserComponent } from './cmps/user/user.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactsComponent } from './cmps/contacts-list/contacts-list.component';
import { ChartsComponent } from './pages/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    BitcoinAppComponent,
    UserComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ChartsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
