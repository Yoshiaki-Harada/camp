export type BBQFields = BBQField[];
export type BBQField = {
  name: string;
  place: string;
  cover: { src: string; type: "Image" | "Video" };
};

export type Foods = Food[];
export type Food = { name: string; type: string };
