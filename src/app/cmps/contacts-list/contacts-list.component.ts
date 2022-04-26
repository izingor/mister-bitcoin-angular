import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {
  // @Input() contacts: Contact[];
  @Output() onSelect = new EventEmitter<string>();
  constructor(private contactService: ContactService) {}

  subscription: Subscription;
  contacts: Contact[];
  contacts$: Observable<Contact[]>;

  selectedContactId!: string;

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
    console.log(this.contacts$);
    this.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
  ngOnDestroy(): void {}
}
