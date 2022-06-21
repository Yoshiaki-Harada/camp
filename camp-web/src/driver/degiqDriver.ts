import axios, { AxiosResponse } from "axios";

export type DegiqSeach = (Locale: string) => Promise<HTMLElement>;
const endpoint =
  import.meta.env.VITE_DEGIQ_ENDPOINT ||
  "https://digiq.jp/portal/search-experience";
export const search: DegiqSeach = async (
  locale: string
): Promise<HTMLElement> => {
  const res = await axios.get(endpoint, {
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
