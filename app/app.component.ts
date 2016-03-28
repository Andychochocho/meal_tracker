import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h2>Meal Tracker</h2>
        <meal-list
        [mealList]="meals"
        (onMealSelect)="selectedMeal($event)">
        </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Soylent", "2 scoops of soylent", "500"),
      new Meal("Burrito", "was from chipotle", "800"),
      new Meal("Celery", "tasted gross", "0"),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
