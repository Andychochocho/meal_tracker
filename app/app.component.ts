import { Component } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: [mealList],
  template:`
  <h4 *ngFor"#currentMeal of mealList>" (click)="mealClicked(currentMeal)">
    {{ currentMeal.description }}
  </h4>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">
        {{meal.food}}
      </h3>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Soylent", "2 scoops of soylent", 500),
      new Meal("Burrito", "was from chipotle", 800),
      new Meal("Celery", "tasted gross", 0),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}

export class Meal {
  public healthy: boolean =false;
  constructor(public food: string, public details: string, public calories: number) {}
  healthyChecker() {
    if(this.calories < 300) {
      this.healthy = true;
    }
  }
}
