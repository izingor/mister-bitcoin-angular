import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/models/chart';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  rates: string[];

  ngOnInit(): any {
    this.contactService.getRates().subscribe((res) => {
      this.rates = res;
    });
  }
}
