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
    formElement.reset();
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button type="submit">Signup</button>
      </form>
    </section>
  );
}

export default App;
