export type BBQFields = BBQField[];
export type BBQField = { name?: Name; place?: Place; cover?: Cover };

export type Name = string;
export type Locale = string;
export type Place = string;
export type Cover = {
  type: "Image" | "Video";
  src: Link;
};
export type Link = string;

export const displayName = (name?: Name) => name || "-";
export const displayPlace = (place?: Place) => place || "-";
export const getCover = (cover?: Cover) =>
  cover || {
    type: "Image",
    src: "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
  };
