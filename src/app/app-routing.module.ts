import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './cmps/contacts-list/contacts-list.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';

const routes: Routes = [
  {
    path: '',
    component: BitcoinAppComponent,
  },
  { path: 'contacts', component: ContactsComponent },
  { path: 'home', component: BitcoinAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
