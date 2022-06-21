import { For, useContext } from "solid-js";
import { LoadFoodContext } from "../../container";
import CheckQuestion from "../01_atoms/CheckQuestion";
import GapItems from "../01_atoms/GapItems";
import Section from "../01_atoms/Section";

export default () => {
  const { foods } = useContext(LoadFoodContext);
  return (
    <Section title="食べたい物はなんですか？">
      <GapItems gap="8px">
        <For each={foods} fallback={<div>Loading...</div>}>
          {(food, index) => <CheckQuestion label={food.name} />}
        </For>
      </GapItems>
    </Section>
  );
};
