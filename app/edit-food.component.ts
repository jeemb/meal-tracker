import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="selectedFood">
    <label>Name:</label>
    <input [(ngModel)]="selectedFood.name">
    <label>Calories</label>
    <input [(ngModel)]="selectedFood.calories">
    <label>Details</label>
    <input [(ngModel)]="selectedFood.details">
    <button (click)="finishedEditing()">Done</button>
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
