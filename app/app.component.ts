import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>Meal Tracker</h1>
    <food-list [foods]="foods" (clickSender)="selectFood($event)"></food-list>
  </div>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food('coffee', '200', 'without milk this morning'),
    new Food('breakfast sandwich', '250', 'bacon cheese and egg'),
    new Food('pasta', '350', 'with sauce')
  ]

}
