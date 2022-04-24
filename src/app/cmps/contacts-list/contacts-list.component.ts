import { Component, OnInit, OnDestroy, Input, Output,EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() onSelect = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {}
}
