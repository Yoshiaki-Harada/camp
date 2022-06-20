import { FoodInputPort } from "./inputPort";
import { FoodOuputPort } from "./outputPort";

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
