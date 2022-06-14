import { Foods } from "../../domain/food";

export type InputFoods = () => Foods;

export interface FoodInputPort {
  findAll(): Promise<Foods>;
}
