/* @refresh reload */
import { render } from "solid-js/web";

import "./reset.css";
import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
