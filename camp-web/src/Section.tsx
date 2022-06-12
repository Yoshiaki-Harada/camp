import { css } from "@emotion/css";
import { JSXElement } from "solid-js";

const style = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const titleStyle = css`
  font-size: large;
  margin: 0;
`;

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
      {children}
    </section>
  );
};
