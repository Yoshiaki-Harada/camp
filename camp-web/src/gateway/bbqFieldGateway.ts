import { BBQFields, Cover } from "../domain/bbq";
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

export const getCover = (element: Element): Cover => {
  const el = element.querySelector("img");
  if (el != null) {
    return { src: el.src, type: "Image" };
  }
  const video = element.querySelector("video source")!!;
  return { src: video.getAttribute("src")!!, type: "Video" };
};

export const getBBQField = (element: HTMLElement): BBQFields => {
  return Array.from(element.querySelectorAll(".mb-4")).map((e: Element) => {
    const name = e.querySelector(".search_tit")?.textContent?.trim();
    const place = e.querySelector("p.mb-0")?.textContent?.trim();
    const cover = getCover(e);
    return { name, place, cover };
  });
};
