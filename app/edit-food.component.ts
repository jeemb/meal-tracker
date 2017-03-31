import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="selectedFood" class="form-group" id="edit-food">
      <h3>Edit Food Item</h3>
      <label>Name:</label>
      <input [(ngModel)]="selectedFood.name" class="form-control">
      <label>Calories</label>
      <input [(ngModel)]="selectedFood.calories" class="form-control">
      <label>Details</label>
      <input [(ngModel)]="selectedFood.details" class="form-control">
      <button (click)="finishedEditing()" class="btn btn-warning">Done</button>
    </div>
  `
})

export class EditFoodComponent {
    @Input() selectedFood: Food[];
    @Output() clickSender = new EventEmitter();

    finishedEditing() {
      this.clickSender.emit();
    }
}
