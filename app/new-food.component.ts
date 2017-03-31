import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="form-group" id="new-food">
  <h3>Log A New Food Item</h3>
  <label>Enter Food Name</label>
  <input #newName class="form-control">
  <label>Enter Caloric Information</label>
  <input #newCalories class="form-control">
  <label>Enter Details</label>
  <input #newDetails class="form-control">

  <button class="btn btn-info btn btn-xs" (click)="submitForm(newName.value, newCalories.value, newDetails.value);newName.value=''; newCalories.value=''; newDetails.value='';">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

    submitForm(name: string, calories: number, details: string) {
      var newFood: Food = new Food(name, calories, details);
      this.newFoodSender.emit(newFood);
    }
}
