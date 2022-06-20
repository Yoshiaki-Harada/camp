import { For, useContext } from "solid-js";
import { LoadFoodContext } from "../../container";
import Section from "../01_atoms/Section";

export default () => {
  const { foods } = useContext(LoadFoodContext);
  return (
    <Section title="購入の目安">
      <For each={foods} fallback={<div>Loading...</div>}>
        {(food, index) => <div>{food.name} </div>}
      </For>
    </Section>
  );
};
