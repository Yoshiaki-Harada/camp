import { css } from "@emotion/css";
import { JSXElement } from "solid-js";

export default ({ gap, children }: { gap: string; children: JSXElement }) => {
  return (
    <div class={style} style={`gap: ${gap}`}>
      {children}
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
`;
