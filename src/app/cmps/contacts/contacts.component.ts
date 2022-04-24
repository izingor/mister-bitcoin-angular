import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() contacts: Contact[];
  constructor() {}

  ngOnInit(): void {}
}
