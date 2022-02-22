import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw82';
  coderObject: any;
  numbers = [1,2,3,4,5,6,7,8,9,0];
  code!: Observable<Object>;

  constructor() {
  }

  onEnter() {

  }

  codeInsert(number: number) {

  }

  deleteLastSymbol() {

  }
}
