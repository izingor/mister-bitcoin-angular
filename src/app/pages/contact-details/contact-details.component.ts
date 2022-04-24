import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  
  @Input() contactId: string;
  @Output() closeDetails = new EventEmitter<string>();
  contact: Contact;

  async ngOnInit() {
    const contact = await this.contactService.getContactById(this.contactId).toPromise()
    this.contact = contact;
    // const contact = this.contactService.getContactById(this.contactId).
  }
}
