import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector : 'app-successful-alert',
  templateUrl : './successful-alert.component.html',
  styles : [
    `
    p {
        padding: 20px;
        background-color: lightblue;
        border: 1px solid green;
    }
    `
  ]
})
export class SuccessfulAlertComponent {

}
