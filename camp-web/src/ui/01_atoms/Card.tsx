import { css } from "@emotion/css";
import { JSXElement } from "solid-js";

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
  margin-right: 20px;
`;

const right = css`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default ({ children }: { children: JSXElement }) => {
  return (
    <div class={container}>
      <div class={left}>Image..</div>
      <div class={right}>{children}</div>
    </div>
  );
};
