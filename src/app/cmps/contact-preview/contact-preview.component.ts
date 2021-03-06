import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onSelect = new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {}
}
