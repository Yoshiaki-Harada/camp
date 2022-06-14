import { FoodInputPort } from "./port/inputPort";
import { FoodOuputPort } from "./port/outputPort";

export const loadFoods = async ({
  inputPort,
  outputPort,
}: {
  inputPort: FoodInputPort;
  outputPort: FoodOuputPort;
}) => {
  const foods = await inputPort.findAll();
  outputPort.set(foods);
};
