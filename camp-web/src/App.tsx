import type { Component } from "solid-js";
import { css } from "@emotion/css";
import logo from "./assets/logo.svg";

const appStyle = css`
  text-align: center;
`;

const header = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const logoStyle = css`
  animation: logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const link = css`
  color: #b318f0;
`;

const App: Component = () => {
  return (
    <div class={appStyle}>
      <header class={header}>
        <img src={logo} class={logoStyle} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
