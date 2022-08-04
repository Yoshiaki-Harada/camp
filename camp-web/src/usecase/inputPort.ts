import { BBQFields, Locale } from "../domain/bbq";
import { FoodAmount, Foods } from "../domain/food";
import { People } from "../domain/people";

export interface FoodInputPort {
  findAll(): Promise<Foods>;
}

export interface BBQFieldInputPort {
  findBy(locale: Locale): Promise<BBQFields>;
}

export interface FoodAmountInputPort {
  calucurate(people: People): Promise<FoodAmount>;
}
