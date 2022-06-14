import { SetStoreFunction } from "solid-js/store";
import { Foods } from "../domain/food";
import { FoodOuputPort } from "../usecase/port/outputPort";

export const useFoodPresenter = (
  setState: SetStoreFunction<{ foods: Foods }>
): FoodOuputPort => ({
  set(foods: Foods): void {
    setState("foods", (l) => foods);
  },
});
