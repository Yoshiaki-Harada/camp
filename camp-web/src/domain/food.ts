export type Foods = Food[];
export type Food = { name: string; type: string };
export type FoodAmount = Map<Food, Ammount>;

export type Ammount = { number: number; unit: string };
