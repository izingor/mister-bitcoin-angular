import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  user: User = {
    name:"Potato Joe",
    coins: 1000, 
    moves: []
    
  }

  ngOnInit(): void {
  }

}
