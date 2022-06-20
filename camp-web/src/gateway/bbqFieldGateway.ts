import { BBQFields } from "../domain/bbq";
import { DegiqSeach } from "../driver/degiqDriver";
import { BBQFieldInputPort } from "../usecase/inputPort";

export const useBBQFieldGateway = (
  digiqSearch: DegiqSeach
): BBQFieldInputPort => ({
  async findBy(locale: string): Promise<BBQFields> {
    const element = await digiqSearch(locale);
    return getBBQField(element);
  },
});

export const getBBQField = (element: HTMLElement): BBQFields => {
  return Array.from(element.querySelectorAll(".mb-4")).map((e: Element) => {
    const name = e.querySelector(".search_tit")?.textContent?.trim();
    const place = e.querySelector("p.mb-0")?.textContent?.trim();
    return { name, place };
  });
};
