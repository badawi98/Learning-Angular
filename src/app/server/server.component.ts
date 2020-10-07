import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class serverComponent {
  serverId : number = 10;
  serverStatus : string = "Offline"

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
  }

  getServerId(){
    return this.serverId;
  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red'
  }
}
