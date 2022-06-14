import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { Foods } from "./domain/food";
import { httpGet } from "./driver/api";
import { useFoodGateway } from "./gateway/foodGateway";
import { useFoodPresenter } from "./presenter/foodPresenter";
import { loadFoods } from "./usecase/loadFoods";

const foods: Foods = [];

const [state, setState] = createStore({ foods });

const DepsContext = createContext({
  inputPort: useFoodGateway(httpGet),
  outputPort: useFoodPresenter(setState),
});

const deps = useContext(DepsContext);

export const LoadFoodContext = createContext({
  state,
  loadFoods: () => loadFoods(deps),
});
