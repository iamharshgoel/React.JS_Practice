import React, { useState } from "react";

function App() {
  const [name, setName] = useState(" ");
  const [heading, setHeading] = useState(" ");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }
  return (
    <form onSubmit={handleClick}>
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
    </form>
  );
}

export default App;
