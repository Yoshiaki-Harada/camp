import axios, { AxiosResponse } from "axios";

export type DegiqSeach = (Locale: string) => Promise<HTMLElement>;
export const search: DegiqSeach = async (
  locale: string
): Promise<HTMLElement> => {
  const res = await axios.get("/api", {
    responseType: "document",
    params: {
      kw: locale,
      search: null,
      adult: null,
      child: null,
    },
    withCredentials: true,
  });
  return res.data.querySelector("body");
};
