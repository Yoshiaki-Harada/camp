import { css } from "@emotion/css";

const style = css`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export default ({ text }: { text: string }) => {
  return <div class={style}>{text}</div>;
};
