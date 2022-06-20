import { BBQFieldInputPort } from "./inputPort";
import { BBQFieldOuputPort } from "./outputPort";

export const searchBBQFields = async ({
  inputPort,
  outputPort,
}: {
  inputPort: BBQFieldInputPort;
  outputPort: BBQFieldOuputPort;
}) => {
  const fields = await inputPort.findBy("東京");
  outputPort.set(fields);
};
