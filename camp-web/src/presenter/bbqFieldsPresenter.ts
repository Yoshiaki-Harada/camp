import { SetStoreFunction } from "solid-js/store";
import { BBQFields } from "../domain/bbq";
import * as state from "../ui/state";
import { BBQFieldOuputPort } from "../usecase/outputPort";

export const useBBQFieldPresenter = (
  setState: SetStoreFunction<state.BBQFields>
): BBQFieldOuputPort => ({
  set(bbqFields: BBQFields): void {
    setState((l) => bbqFields);
  },
});
