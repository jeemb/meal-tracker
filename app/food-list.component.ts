import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
selector: 'food-list',
template: `
<ul>
<li div *ngFor="let food of foods"> Name: {{food.name}} Calories: {{food.calories}} Details: {{food.details}} </li>
</ul>
`
})

export class FoodListComponent {
  @Input() foods: Food[];
  @Output() clickSender = new EventEmitter();

  selectFood(food: Food) {
  this.clickSender.emit(food);
}
}
