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
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect= new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('first', clickedMeal);
    this.onMealSelect.emit(clickedMeal);
  }
}
