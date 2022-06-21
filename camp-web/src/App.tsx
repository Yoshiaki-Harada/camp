import { css } from "@emotion/css";
import { Route, Routes } from "solid-app-router";
import { Component, onMount, useContext } from "solid-js";
import { LoadFoodContext, SearchBBQFieldContext } from "./container";
import Sidebar from "./ui/03_organizms/Sidebar";
import BBQFields from "./ui/04_templates/BBQFields";
import HowManyFoods from "./ui/04_templates/HowManyFood";

const flex = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  flex: 1;
`;

const App: Component = () => {
  const { loadFoods } = useContext(LoadFoodContext);
  const { searchBBQFields } = useContext(SearchBBQFieldContext);
  onMount(async () => {
    loadFoods();
    searchBBQFields();
  });
  return (
    <div class={flex}>
      <Sidebar menu={menu} />
      <div class={container}>
        <Routes>
          <Route path="/" element={BBQFields}></Route>
          <Route path="/tools" element={HowManyFoods}></Route>
          <Route path="/fields" element={BBQFields}></Route>
        </Routes>
      </div>
    </div>
  );
};

const menu = [
  { title: "TOOL", link: "/tools" },
  { title: "BBQ FIELD", link: "/fields" },
];
export default App;
