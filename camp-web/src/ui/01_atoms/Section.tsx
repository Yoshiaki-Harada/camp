import { css } from "@emotion/css";
import { JSXElement } from "solid-js";

export default ({
  title,
  children,
}: {
  title: string;
  children: JSXElement;
}) => {
  return (
    <section class={style}>
      <h2 class={titleStyle}>{title}</h2>
      <div class={childrenStyle}>{children}</div>
    </section>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0px 16px 4px;
  border-bottom: 1px solid silver;
  width: 480px;
`;

const titleStyle = css`
  font-size: large;
  margin: 0;
`;

const childrenStyle = css`
  padding-left: 8px;
`;
