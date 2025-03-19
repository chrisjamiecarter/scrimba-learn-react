import React from "react";

function App() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formElement = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    // One-by-one.
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const employmentStatus = formData.get("employmentStatus");
    // const favouriteColour = formData.get("favColour");

    // All-in-one. NOTE: except checkboxes due to array and get all.
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    const data: Record<string, unknown> = {
      ...Object.fromEntries(formData),
      dietaryRestrictions,
    };

    console.log("data", data);

    formElement.reset();
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="test@email.com"
          type="email"
          name="email"
          placeholder="example@email.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="P@ssW0rd"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          defaultValue="This is the description"
          name="description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input
              id="fulltime"
              defaultChecked={true}
              type="radio"
              name="employmentStatus"
              value="fulltime"
            />
            Full-time
          </label>
          <label>
            <input
              id="parttime"
              type="radio"
              name="employmentStatus"
              value="parttime"
            />
            Part-time
          </label>
          <label>
            <input
              id="unemployed"
              type="radio"
              name="employmentStatus"
              value="unemployed"
            />
            Unemployed
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input
              id="kosher"
              type="checkbox"
              name="dietaryRestrictions"
              value="kosher"
            />
            Kosher
          </label>
          <label>
            <input
              id="vegan"
              type="checkbox"
              name="dietaryRestrictions"
              value="vegan"
            />
            Vegan
          </label>
          <label>
            <input
              id="unemployed"
              type="checkbox"
              name="dietaryRestrictions"
              value="glutenfree"
              defaultChecked={true}
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favcolour">What is your favourite colour?</label>
        <select id="favColour" name="favColour" defaultValue="blue" required>
          <option value="" disabled>
            -- Choose a colour --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button type="submit">Signup</button>
      </form>
    </section>
  );
}

export default App;
