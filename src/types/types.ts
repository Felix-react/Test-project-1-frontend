export type Recipe = {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  bakeTime: string;
  totalTime: string;
  servings: string;
  imageUrl: string;
};

export type Subcategory = {
  id: number;
  name: string;
  recipes: Recipe[];
};

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
  subcategories: Subcategory[];
};

