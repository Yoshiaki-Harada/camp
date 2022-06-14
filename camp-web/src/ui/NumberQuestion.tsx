import { css } from "@emotion/css";

const style = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    margin-right: 4px;
  }
`;

export default ({ label }: { label: string }) => (
  <div class={style}>
    <label for="question">{label}</label>
    <input name="question" type="number" />
    <span>（人）</span>
  </div>
);
