import { IngredientsListProps } from "../models/IngredientsListProps";

export default function IngredientsList(props: IngredientsListProps) {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>
      {ingredient}
      <button
        type="button"
        onClick={() => props.handleRemoveIngredientClick(ingredient)}>
        X
      </button>
    </li>
  ));

  return (
    <>
      {ingredientListItems.length > 0 ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientListItems}
          </ul>
          {ingredientListItems.length > 3 ? (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.handleGetRecipeClick}>Get a recipe</button>
            </div>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
