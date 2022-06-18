import { Route, Routes } from "solid-app-router";
import { Component, onMount, useContext } from "solid-js";
import { LoadFoodContext } from "./contaiiner";
import HowManyFoodTemplate from "./ui/04_templates/HowManyFoodTemplate";

const App: Component = () => {
  const { loadFoods } = useContext(LoadFoodContext);
  onMount(async () => {
    await loadFoods();
  });
  return (
    <Routes>
      <Route path="/" element={HowManyFoodTemplate}></Route>
      <Route path="/tools" element={HowManyFoodTemplate}></Route>
    </Routes>
  );
};
export default App;
