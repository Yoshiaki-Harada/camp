import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { httpGet } from "./driver/api";
import { search } from "./driver/degiqDriver";
import { useBBQFieldGateway } from "./gateway/bbqFieldGateway";
import { useFoodGateway } from "./gateway/foodGateway";
import { useBBQFieldPresenter } from "./presenter/bbqFieldsPresenter";
import { useFoodPresenter } from "./presenter/foodPresenter";
import { BBQFields, Foods } from "./ui/state";
import { loadFoods } from "./usecase/loadFoods";
import { searchBBQFields } from "./usecase/searchBBQFIeld";

const [foodsState, setFoodsState] = createStore<Foods>([]);

const [bbqFieldsState, setBBQFieldsState] = createStore<BBQFields>([]);

const DepsContext = createContext({
  foodInputPort: useFoodGateway(httpGet),
  foodOutputPort: useFoodPresenter(setFoodsState),
  bbqFieldInputPort: useBBQFieldGateway(search),
  bbqFieldOutputPort: useBBQFieldPresenter(setBBQFieldsState),
});

const deps = useContext(DepsContext);

export const LoadFoodContext = createContext({
  foods: foodsState,
  loadFoods: () =>
    loadFoods({
      inputPort: deps.foodInputPort,
      outputPort: deps.foodOutputPort,
    }),
});

export const SearchBBQFieldContext = createContext({
  bbqFields: bbqFieldsState,
  searchBBQFields: () =>
    searchBBQFields({
      inputPort: deps.bbqFieldInputPort,
      outputPort: deps.bbqFieldOutputPort,
    }),
});
