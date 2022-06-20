import { For, useContext } from "solid-js";
import { SearchBBQFieldContext } from "../../container";

export default () => {
  const { bbqFields } = useContext(SearchBBQFieldContext);
  return (
    <For each={bbqFields} fallback={<div>Loading...</div>}>
      {(field, _) => (
        <div>
          {field.name}: {field.place}
        </div>
      )}
    </For>
  );
};
