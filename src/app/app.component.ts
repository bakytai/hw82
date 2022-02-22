import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { addChar, chek, deleteChar } from './keypad.actions';
import { StateModel } from './state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  numbers = [1,2,3,4,5,6,7,8,9,0];
  code!: Observable<Object>;
  myState!: StateModel;
  stateSubscription!: Subscription;
  symbolsArr: string[] = [];

  constructor(private store: Store<{code: Object}>) {
    this.code = store.select('code');
    this.stateSubscription =  this.code.subscribe( state => {
      this.myState = <StateModel>state;
      this.symbolsArr = this.myState.password.split('')
    })
  }

  onEnter() {
    this.store.dispatch(chek());
    if (this.myState.isCorrect) {

    }
  }

  getNumber(numberValue: number) {
    this.store.dispatch(addChar({char: numberValue.toString()}));
  }

  deleteLastSymbol() {
    this.store.dispatch(deleteChar());
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }
}
