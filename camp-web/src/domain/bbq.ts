export type BBQFields = BBQField[];
export type BBQField = { name?: Name; place?: Place };

export type Name = string;
export type Locale = string;
export type Place = string;

export const displayName = (name?: Name) => name || "-";
export const displayPlace = (name?: Place) => name || "-";
