import { css } from "@emotion/css";

const flexBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    margin-right: 4px;
  }
`;

export default ({ label }: { label: string }) => (
  <div class={flexBox}>
    <input name="question" type="checkbox" />
    <label for="question">{label}</label>
  </div>
);
