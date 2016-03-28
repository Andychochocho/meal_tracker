export class Meal {
  public healthy: boolean =false;
  constructor(public food: string, public details: string, public calories: number) {}
  healthyChecker() {
    if(this.calories < 300) {
      this.healthy = true;
    }
  }
}
