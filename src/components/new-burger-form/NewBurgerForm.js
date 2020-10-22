import React, { useState } from "react";
import { addBurger } from "../../services/burgers";
import "./NewBurgerForm.css";

const NewBurgerForm = ({ updateResults, burgers }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!!burgers.filter((burger) => burger.name === name).length) {
      alert("Burger is already added. Try a different name.");
    } else {
      addBurger(name).then(() => updateResults());
    }
    setName("");
  };

  return (
    <>
      <form className="new-burger-form" onSubmit={handleSubmit}>
        <label className="new-burger-form__label">New Burger Idea</label>
        <input
          className="new-burger-form__input"
          type="text"
          placeholder="Burger Name"
          value={name}
          onChange={handleChange}
        />
        <input
          className="new-burger-form__button"
          type="submit"
          value="Submit"
        />
      </form>
      <hr />
    </>
  );
};

export default NewBurgerForm;
