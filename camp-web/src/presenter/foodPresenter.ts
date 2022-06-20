import { SetStoreFunction } from "solid-js/store";
import { Foods } from "../domain/food";
import * as state from "../ui/state";
import { FoodOuputPort } from "../usecase/outputPort";

export const useFoodPresenter = (
  setState: SetStoreFunction<state.Foods>
): FoodOuputPort => ({
  set(foods: Foods): void {
    setState((l) => foods);
  },
});
