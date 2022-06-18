import { For, useContext } from "solid-js";
import { LoadFoodContext } from "../../contaiiner";
import CheckQuestion from "../01_atoms/CheckQuestion";
import Section from "../01_atoms/Section";

export default () => {
  const { state } = useContext(LoadFoodContext);
  return (
    <Section title="食べたい物はなんですか？">
      <For each={state.foods} fallback={<div>Loading...</div>}>
        {(food, index) => <CheckQuestion label={food.name} />}
      </For>
    </Section>
  );
};
