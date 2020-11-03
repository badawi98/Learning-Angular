import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs'
import { filter, map } from 'rxjs/operators'
@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit , OnDestroy {

  private firstObsSubsciption : Subscription;

  constructor() { }

 

  ngOnInit(): void {
    // this.firstObsSubsciption = interval(1000).subscribe(
    //   count => { 
    //     console.log(count);
    //   }
    // );
    const customIntervalObservable = new Observable(
      (observer) => {
        let count = 0 ;
        setInterval( () => {
          observer.next(count);
          if(count === 5){
            observer.complete();
          }
          if(count > 3 ){
            observer.error(new Error ('Count is greater than 3'))
          }
          count++;
        }, 1000)
      }
    );
    

    this.firstObsSubsciption = customIntervalObservable.pipe(filter(data => {
      return data > 0 ;
    }) , map ((data: number) => {
      return 'Round : ' + (data + 1);
    })).subscribe(
      data => {
        console.log(data);
      } , error => { 
        console.log(error);
        alert(error.message)
      } , () => {
        console.log('Completed!');
      }
    );
  }
  ngOnDestroy(): void {
    this.firstObsSubsciption.unsubscribe();
  }
}
