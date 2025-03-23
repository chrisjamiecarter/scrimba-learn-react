import { useState, FormEvent, useRef, useEffect } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../lib/ai";

export default function Main(): JSX.Element {
  const [ingredients, setIngredients] = useState<string[]>([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipe, setRecipe] = useState<string>("");
  const recipeSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  function addIngredient(ingredient: string) {
    setIngredients((prev) => [...prev, ingredient]);
  }

  function removeIngredient(ingredient: string) {
    setIngredients((prev) => prev.filter((x) => x !== ingredient));
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    if (recipeMarkdown) {
      setRecipe(recipeMarkdown);
    }
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    const newIngredient = formData.get("ingredient");
    addIngredient(newIngredient as string);
    formElement.reset();
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <IngredientsList
        ingredients={ingredients}
        handleGetRecipeClick={getRecipe}
        handleRemoveIngredientClick={removeIngredient}
        recipeSection={recipeSection}
      />
      {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
  );
}
