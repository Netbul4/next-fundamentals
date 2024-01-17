import React, { useState } from "react";

// Complex forms.
export default function Forms() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form was sent succesfully");
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>Choose your favorite fruit</p>
        <input
          type="radio"
          id="apple"
          name="fruit"
          value="apple"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="apple">Apple</label>
        <input
          type="radio"
          id="pear"
          name="fruit"
          value="pear"
          onChange={handleChange}
        />
        <label htmlFor="pear">Pear</label>
        <input
          type="radio"
          id="kiwi"
          name="fruit"
          value="kiwi"
          onChange={handleChange}
        />
        <label htmlFor="kiwi">Kiwi</label>
        <p>Choose your favorite console.</p>
        <select name="console" onChange={handleChange} defaultValue="">
          <option value="">----</option>
          <option value="">Playstation 5</option>
          <option value="">Plasystation 4</option>
          <option value="">Xbox Series X</option>
          <option value="">Xbox Series S</option>
          <option value="">Nintendo Switch</option>
          <option value="">Super Nintendo</option>
        </select>
        <br />
        <label htmlFor="terms">Accept Terms & Conditions.</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChecked}
        />
        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}

function EasyForms() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const [console, setConsole] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form was sent succesfully");
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Choose your favorite fruit</p>
        <input
          type="radio"
          id="apple"
          name="fruit"
          value="apple"
          onChange={(e) => setFruit(e.target.value)}
          defaultChecked
        />
        <label htmlFor="apple">Apple</label>
        <input
          type="radio"
          id="pear"
          name="fruit"
          value="pear"
          onChange={(e) => setFruit(e.target.value)}
        />
        <label htmlFor="pear">Pear</label>
        <input
          type="radio"
          id="kiwi"
          name="fruit"
          value="kiwi"
          onChange={(e) => setFruit(e.target.value)}
        />
        <label htmlFor="kiwi">Kiwi</label>
        <p>Choose your favorite console.</p>
        <select
          name="console"
          onChange={(e) => setConsole(e.target.value)}
          defaultValue=""
        >
          <option value="">----</option>
          <option value="">Playstation 5</option>
          <option value="">Plasystation 4</option>
          <option value="">Xbox Series X</option>
          <option value="">Xbox Series S</option>
          <option value="">Nintendo Switch</option>
          <option value="">Super Nintendo</option>
        </select>
        <br />
        <label htmlFor="terms">Accept Terms & Conditions.</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={(e) => setTerms(e.target.checked)}
        />
        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}
