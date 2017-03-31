import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h1>Log A New Food Item</h1>
  <div>
  <label>Enter Food Name</label>
    <input #newName>
  <label>Enter Caloric Information</label>
    <input #newCalories>
  <label>Enter Details</label>
    <input #newDetails>

  <button (click)="submitForm(newName.value, newCalories.value, newDetails.value);newName.value=''; newCalories.value=''; newDetails.value='';">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

    submitForm(name: string, calories: string, details: string) {
      var newFood: Food = new Food(name, calories, details);
      this.newFoodSender.emit(newFood);
    }
}
