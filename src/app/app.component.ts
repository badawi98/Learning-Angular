import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountsService } from './accounts-service'
import { userService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {

  userActivated = false;
  private activatedSub : Subscription;
  // accounts : {name : string , status : string}[] = [];

  // constructor(private accountsService : AccountsService ){}
  constructor(private userService : userService){}
  
  ngOnInit(){
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      didActivate => { 
        this.userActivated = didActivate;
      }
    );
    // this.accounts = this.accountsService.accounts;
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  //numbers = [1,2,3,4,5]
  // oddNumbers = [1,3,5]
  // evenNumbers = [2,4]
  // onlyOdd = false;
  // value = 20;
  // serverElements = [{type : 'server' , name : 'TestServer' , content : 'Test Content'}];
  // onServerAdded(ServerData :{serverName : string , serverContnet : string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: ServerData.serverName,
  //     content: ServerData.serverContnet
  //   });
  // }

  // onBlueprintAdded(blueprintData :{serverName : string , serverContnet : string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContnet
  //   });
  // }
}
