import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onClickNewMeal'],
  templateUrl: 'app/new-meal.component.html'
})

export class NewMealComponent {
  public onClickNewMeal: EventEmitter<string[]>;
  constructor() {
    this.onClickNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var mealList: string[] = [userName.value, userDetails.value, userCalories.value];
    this.onClickNewMeal.emit(mealList);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
