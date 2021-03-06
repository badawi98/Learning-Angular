import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', attribute
  // selector: '.app-servers', class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was Created!";
  serverIsCreation = false;
  serverName = 'Testserver';
  servers = ['testServer' , 'testServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverIsCreation = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was Created! Name is" +this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
