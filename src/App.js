import React, { useState } from "react";
import AddUser from "./Components/UserForm/AddUser";
import UserList from "./Components/UsersList/UserList";
import ErrorModel from "./Components/ErrorModel/ErrorModel";

function App() {
  const [userData, setUserData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const errorMsgHandler = (message) => {
    setErrorMessage(message);
    if (message === "") {
      setErrorMessage("");
    } else {
      setErrorMessage(message);
    }
  };

  const clearMsgHandler = () => {
    setErrorMessage("");
  };

  const addUserHandler = (enteredValues) => {
    setUserData((prevData) => {
      return [enteredValues, ...prevData];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} onShowMsg={errorMsgHandler} />
      {userData && <UserList userData={userData} />}
      {errorMessage && (
        <ErrorModel onClearMsg={clearMsgHandler} errorMessage={errorMessage} />
      )}
    </div>
  );
}

export default App;
