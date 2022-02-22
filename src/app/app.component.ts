import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addChar, chek, deleteChar } from './keypad.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1,2,3,4,5,6,7,8,9,0];
  code!: Observable<Object>;

  constructor(private store: Store<{code: Object}>) {
    this.code = store.select('code');
  }

  onEnter() {
    this.store.dispatch(chek());
  }

  codeInsert(numberValue: number) {
    this.store.dispatch(addChar({char: numberValue.toString()}));
  }

  deleteLastSymbol() {
    this.store.dispatch(deleteChar());
  }
}
