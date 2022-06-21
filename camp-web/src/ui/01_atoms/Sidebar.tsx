import { css } from "@emotion/css";
import { For } from "solid-js";

export default ({ menu }: { menu: { title: string; link: string }[] }) => {
  return (
    <div class={sidebar}>
      <For each={menu}>
        {(item, _) => (
          <a href={item.link} class={itemStyle}>
            {item.title}
          </a>
        )}
      </For>
    </div>
  );
};

const sidebar = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 180px;
  height: 100%;
  padding: 36px 0px 0px 24px;
  position: fixed;
  gap: 8px;
  background-color: #99ccff;
`;

const itemStyle = css`
  color: var(--black);
  text-decoration: none;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
