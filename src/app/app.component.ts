import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //numbers = [1,2,3,4,5]
  oddNumbers = [1,3,5]
  evenNumbers = [2,4]
  onlyOdd = false;
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
