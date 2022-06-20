import { css } from "@emotion/css";
import { Route, Routes } from "solid-app-router";
import { Component, onMount, useContext } from "solid-js";
import { LoadFoodContext } from "./container";
import BBQFields from "./ui/04_templates/BBQFields";
import HowManyFoods from "./ui/04_templates/HowManyFood";

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const App: Component = () => {
  const { loadFoods } = useContext(LoadFoodContext);
  onMount(async () => {
    await loadFoods();
  });
  return (
    <div class={container}>
      <Routes>
        <Route path="/" element={BBQFields}></Route>{" "}
        <Route path="/tools" element={HowManyFoods}></Route>
        <Route path="/fields" element={BBQFields}></Route>
      </Routes>
    </div>
  );
};
export default App;
