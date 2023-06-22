import React, { useState } from "react";
import "../UserForm/AddUser.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let message = "";
    if (enteredName === "" || enteredAge === "") {
      message = "Please enter a valid name and age (non-empty values)";
    } else if (enteredAge <= 0) {
      message = "Please enter a valid age(>0).";
    } else {
      message = "";
    }
    props.onShowMsg(message);

    if(message === ""){
    let enteredValues = { enteredName: enteredName, enteredAge: enteredAge };
    props.onAddUser(enteredValues);
    }

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="input">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          onChange={nameChangeHandler}
          value={enteredName}
          id="name"
          name="name"
          pattern="[A-Za-z].{5,}"
          title="Use characters only, length must be 5 or more"
          
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          onChange={ageChangeHandler}
          value={enteredAge}
          name="age"
          type="number"
          id="age"
        />
        <button type="submit" className="button">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
