import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showMessage = true;
  log = []
  constructor() { }

  ngOnInit(): void {
  }
  onToggleDetails() {
    this.showMessage = !this.showMessage
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())

  }
}
