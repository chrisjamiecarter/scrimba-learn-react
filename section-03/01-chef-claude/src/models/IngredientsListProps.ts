export interface IngredientsListProps {
  ingredients: string[];
  handleGetRecipeClick: () => void;
  handleRemoveIngredientClick: (ingredient: string) => void;
}
