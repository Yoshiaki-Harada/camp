import { For, useContext } from "solid-js";
import { LoadFoodContext } from "../../contaiiner";
import Section from "../01_atoms/Section";

export default () => {
  const { state } = useContext(LoadFoodContext);
  return (
    <Section title="購入の目安">
      <For each={state.foods} fallback={<div>Loading...</div>}>
        {(food, index) => <div>{food.name} </div>}
      </For>
    </Section>
  );
};
