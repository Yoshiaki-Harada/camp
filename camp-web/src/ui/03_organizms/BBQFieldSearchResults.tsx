import { css } from "@emotion/css";
import { For, onMount, useContext } from "solid-js";
import { SearchBBQFieldContext } from "../../container";
import Card from "../01_atoms/Card";
import NowrapText from "../01_atoms/NowrapText";

export default () => {
  const { bbqFields } = useContext(SearchBBQFieldContext);
  return (
    <For each={bbqFields} fallback={<div>Loading...</div>}>
      {(field, _) => (
        <div class={card}>
          <Card>
            <div class={info}>
              <span class={name}>
                <NowrapText text={field.name} />
              </span>
              <span class={place}>
                <NowrapText text={field.place} />
              </span>
            </div>
          </Card>
        </div>
      )}
    </For>
  );
};

const info = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
`;

const card = css`
  width: 640px;
  height: 80px;
`;

const name = css`
  font-weight: 700;
`;
const place = css`
  font-weight: 300;
  color: var(--gray);
  font-size: small;
`;
