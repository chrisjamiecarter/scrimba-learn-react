import React from "react";

function App() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formElement = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    const email = formData.get("email");
    console.log("email", email);

    const password = formData.get("password");
    console.log("password", password);

    const description = formData.get("description");
    console.log("description", description);

    const employmentStatus = formData.get("employmentStatus");
    console.log("employmentStatus", employmentStatus);

    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    console.log("dietaryRestrictions", dietaryRestrictions);

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

        <button type="submit">Signup</button>
      </form>
    </section>
  );
}

export default App;
