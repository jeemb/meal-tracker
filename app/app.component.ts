import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class='container'>
  <div id="header">
    <h1>Meal Tracker</h1>
    <h3>Click on item to edit</h3>
  </div>  
    <hr>
    <food-list [foods]="foods" (clickSender)="selectFood($event)"></food-list>
    <hr>
    <edit-food [selectedFood]='selectedFood' (clickSender)="finishedEditing()"></edit-food>
    <hr>
    <new-food (newFoodSender)="newFood($event)"></new-food>
  </div>
  `
})

export class AppComponent {
  foods: Food[] = [
    new Food('coffee', 200, 'without milk this morning'),
    new Food('breakfast sandwich', 250, 'bacon cheese and egg'),
    new Food('pasta', 350, 'with sauce')
  ];

  selectedFood = null;

  selectFood(food) {
    if(this.selectedFood === food) {
      this.selectedFood = null;
    } else {
      this.selectedFood = food;
    }
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  newFood(food) {
  this.foods.push(food);
}

}
