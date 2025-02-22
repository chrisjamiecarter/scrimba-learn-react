import { useState, FormEvent } from "react";

export default function Main(): JSX.Element {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  function addIngredient(ingredient: string) {
    setIngredients((prev) => [...prev, ingredient]);
  }

  function removeIngredient(ingredient: string) {
    setIngredients((prev) => prev.filter((x) => x !== ingredient));
  }

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>
      {ingredient}
      <button type="button" onClick={() => removeIngredient(ingredient)}>
        X
      </button>
    </li>
  ));

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
      <ul>{ingredientListItems}</ul>
    </main>
  );
}
