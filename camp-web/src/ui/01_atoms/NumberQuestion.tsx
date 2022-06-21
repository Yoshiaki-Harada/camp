import { css } from "@emotion/css";

export default ({ label }: { label: string }) => (
  <div class={style}>
    <label for="question">{label}</label>
    <input name="question" type="number" />
    <span>（人）</span>
  </div>
);

const style = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    border: none;
    outline: none;
    border-bottom: 0.5px solid var(--black);
    text-align: right;
    width: 48px;
    &:focus {
      border-bottom: 2px solid var(--black);
    }
  }
  label {
    margin-right: 4px;
  }
`;
