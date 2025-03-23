import Markdown from "react-markdown";

type ClaudeRecipeProps = {
  recipe: string;
};

export default function ClaudeRecipe(props: ClaudeRecipeProps) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  );
}
