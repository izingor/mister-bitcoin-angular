import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'bitcoin-app',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss'],
})
export class BitcoinAppComponent implements OnInit, OnDestroy {
  constructor(private contactService: ContactService) {}

  subscription: Subscription;
  contacts: Contact[];
  contacts$: Observable<Contact[]>;

  selectedContactId!: string;

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
    console.log(this.contacts$);
  }
  ngOnDestroy(): void {

  }
}
