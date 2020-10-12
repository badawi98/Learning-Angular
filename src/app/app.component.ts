import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type : 'server' , name : 'TestServer' , content : 'Test Content'}];
  onServerAdded(ServerData :{serverName : string , serverContnet : string}) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.serverName,
      content: ServerData.serverContnet
    });
  }

  onBlueprintAdded(blueprintData :{serverName : string , serverContnet : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContnet
    });
  }
}
