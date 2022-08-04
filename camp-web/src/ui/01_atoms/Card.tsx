import { css } from "@emotion/css";
import { JSXElement, Match, Switch } from "solid-js";

const container = css`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 10px 10px 0px;
  align-items: center;
  min-width: 0;
  border-bottom: 1px solid silver;
`;
const left = css`
  width: 120px;
  height: 100%;
  padding: 4px;
  margin-right: 20px;
`;

const right = css`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default ({
  cover,
  children,
}: {
  cover: { src: string; type: string };
  children: JSXElement;
}) => (
  <div class={container}>
    <Switch fallback={<div>Not Found</div>}>
      <Match when={cover.type === "Video"}>
        <video class={left} controls>
          <source src={cover.src} />
        </video>
      </Match>
      <Match when={cover.type === "Image"}>
        <img src={cover.src} class={left} />
      </Match>
    </Switch>
    <div class={right}>{children}</div>
  </div>
);
