import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{serverName : string , serverContnet : string}>();
  @Output() blueprintCreated = new EventEmitter <{serverName : string , serverContnet : string}>();

  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(ServerNameInput:HTMLInputElement) {
   this.serverCreated.emit({serverName : ServerNameInput.value , serverContnet : this.newServerContent})
  }

  onAddBlueprint(ServerNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({serverName : ServerNameInput.value , serverContnet : this.newServerContent})

  }
}
