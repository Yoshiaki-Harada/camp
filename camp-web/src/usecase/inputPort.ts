import { BBQFields, Locale } from "../domain/bbq";
import { Foods } from "../domain/food";

export interface FoodInputPort {
  findAll(): Promise<Foods>;
}

export interface BBQFieldInputPort {
  findBy(locale: Locale): Promise<BBQFields>;
}
