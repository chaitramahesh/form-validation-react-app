import React, { useState } from "react";
import AddUser from "./Components/UserForm/AddUser";
import UserList from "./Components/UsersList/UserList";
import ErrorModel from "./Components/ErrorModel/ErrorModel";

function App() {
  const [userData, setUserData] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const errorMsgHandler = (message) => {
    setErrorMessage(message);
    if(message === ''){
    setShowMsg(false);
    }else{
      setShowMsg(true)
    }
  };

  const clearMsgHandler = () => {
    setShowMsg(false);
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
      {showMsg && (
        <ErrorModel onClearMsg={clearMsgHandler} errorMessage={errorMessage} />
      )}
    </div>
  );
}

export default App;
