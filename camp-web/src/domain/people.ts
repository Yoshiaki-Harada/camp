export type People = Map<Person, number>;
export type Person = {
  appetite: Appetite;
};
export type Appetite = "Big" | "Normal" | "Small";
