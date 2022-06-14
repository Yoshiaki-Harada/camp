import { Foods } from "../domain/food";
import { HttpGET } from "../driver/api";
import { FoodInputPort } from "../usecase/port/inputPort";

export const useFoodGateway = (htttpGet: HttpGET): FoodInputPort => ({
  async findAll(): Promise<Foods> {
    return (await htttpGet("")) as Foods;
  },
});
