import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:  `
    <div class="task-form">
    <br>
      <h3>New Meal:</h3>
      <input placeholder="Name of Food" class="col-sm-8 input-lg" #newFoodItem>
      <button (click)="
        addMeal(newFoodItem)" class="btn-lg btn-info">Click here
      </button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(foodItem: HTMLInputElement) {
    this.onSubmitNewMeal.emit(foodItem.value);
    foodItem.value = "";
  }
}
