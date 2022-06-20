import { BBQFields } from "../domain/bbq";
import { Foods } from "../domain/food";

export interface FoodOuputPort {
  set(foods: Foods): void;
}

export interface BBQFieldOuputPort {
  set(fields: BBQFields): void;
}
