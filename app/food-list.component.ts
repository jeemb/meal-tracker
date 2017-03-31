import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
selector: 'food-list',
template: `
<select (change)="onCaloriesChange($event.target.value)">
    <option value="allCalories">All Calories</option>
    <option value="highCalories">High Calories</option>
    <option value="lowCalories">Low Calories</option>
  </select>
<ul>
<li div *ngFor="let food of foods" (click)="selectFood(food)"> Name: {{food.name}} Calories: {{food.calories}} Details: {{food.details}} </li>
</ul>
`
})

export class FoodListComponent {
  @Input() foods: Food[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allCalories";

  selectFood(food: Food) {
  this.clickSender.emit(food);
}

onCaloriesChange(option){
  this.filterByCalories = option;
}
}
