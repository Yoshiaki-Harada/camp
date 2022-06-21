import { For, useContext } from "solid-js";
import { LoadFoodContext } from "../../container";
import GapItems from "../01_atoms/GapItems";
import Section from "../01_atoms/Section";

export default () => {
  const { foods } = useContext(LoadFoodContext);
  return (
    <Section title="購入の目安">
      <GapItems gap="8px">
        <For each={foods} fallback={<div>Loading...</div>}>
          {(food, index) => <div>{food.name} </div>}
        </For>
      </GapItems>
    </Section>
  );
};
