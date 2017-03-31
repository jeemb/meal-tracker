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

<div *ngFor="let food of foods | calories:filterByCalories">
<ul (click)="selectFood(food)" class="list-group">
  <li class="list-group-item"> Name: {{food.name}}</li>
  <li class="list-group-item"> Calories: {{food.calories}}</li>
  <li class="list-group-item"> Details: {{food.details}}</li>
</ul>
</div>
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
