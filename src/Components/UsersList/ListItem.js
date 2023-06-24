import React from "react";

const ListItem = (props) => {
  return (
    <ul>
      {props.userData.map((user, index) => (
        <li
          key={index.toString()}
        >{`${user.enteredName}(${user.enteredAge} years old)`}</li>
      ))}
    </ul>
  );
};

export default ListItem;
