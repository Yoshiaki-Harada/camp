import { Component, For, onMount, useContext } from "solid-js";
import { css } from "@emotion/css";
import Section from "./ui/Section";
import NumberQuestion from "./ui/NumberQuestion";
import CheckQuestion from "./ui/CheckQuestion";
import { LoadFoodContext } from "./di";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;
const questions = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;
`;

const body = css`
  padding: 10px;
`;
const App: Component = () => {
  const { state, loadFoods } = useContext(LoadFoodContext);
  onMount(async () => {
    await loadFoods();
  });

  return (
    <div class={container}>
      <div>
        <h1>BBQどんだけ買えばいいいの？</h1>
        <div class={body}>
          <div class={questions}>
            <Section title="人数は何人ですか？">
              <NumberQuestion label="良く食べる人"></NumberQuestion>
              <NumberQuestion label="普通の人"></NumberQuestion>
              <NumberQuestion label="少食の人"></NumberQuestion>
            </Section>
            <Section title="食べたい物はなんですか？">
              <For each={state.foods} fallback={<div>Loading...</div>}>
                {(food, index) => <CheckQuestion label={food.name} />}
              </For>
            </Section>
          </div>
          <div>
            <Section title="購入の目安">
              <For each={state.foods} fallback={<div>Loading...</div>}>
                {(food, index) => <div>{food.name} </div>}
              </For>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
