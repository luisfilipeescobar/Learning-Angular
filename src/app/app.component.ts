import { Component, OnInit } from '@angular/core';
import { LobsterService } from './lobster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private responseMembers:LobsterService) {

  }
  members = [];
  ngOnInit() {
    this.responseMembers.getMembers().subscribe(responseMembers => this.members = responseMembers);
  }
}