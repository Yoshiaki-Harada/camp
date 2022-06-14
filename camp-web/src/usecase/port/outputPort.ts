import { Foods } from "../../domain/food";

export interface FoodOuputPort {
  set(foods: Foods): void;
}
