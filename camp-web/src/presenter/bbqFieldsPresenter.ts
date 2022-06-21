import { SetStoreFunction } from "solid-js/store";
import { BBQFields, displayName, displayPlace } from "../domain/bbq";
import * as state from "../ui/state";
import { BBQFieldOuputPort } from "../usecase/outputPort";

export const useBBQFieldPresenter = (
  setState: SetStoreFunction<state.BBQFields>
): BBQFieldOuputPort => ({
  set(bbqFields: BBQFields): void {
    console.log("call  set state");
    setState((l) =>
      bbqFields.map((e) => ({
        name: displayName(e.name),
        place: displayPlace(e.place),
      }))
    );
  },
});
