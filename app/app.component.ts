import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list></food-list>
  </div>
  `
})

export class AppComponent {
  food = Food[] = [
    new Food('coffee', '200', 'without milk this morning'),
    new Food('breakfast sandwich', '250', 'bacon cheese and egg'),
    new Food('pasta', '350', 'with sauce')
  ];

}
