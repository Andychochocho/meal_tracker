import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template:`
  <meal-display
        *ngFor="#currentMeal of mealList"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
        <p>{{selectedMeal}}</p>
      </meal-display>
      <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal-details>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect= new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('first', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
