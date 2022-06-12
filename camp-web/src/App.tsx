import type { Component } from "solid-js";
import { css } from "@emotion/css";
import CheckQuestion from "./CheckQuestion";
import Section from "./Section";
import NumberQuestion from "./NumberQuestion";

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
              <CheckQuestion label="お肉" />
              <CheckQuestion label="お魚" />
              <CheckQuestion label="焼きそば" />
            </Section>
          </div>
          <div>
            <Section title="購入の目安">
              <div>お肉</div>
              <div>お魚</div>
              <div>焼きそば</div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
