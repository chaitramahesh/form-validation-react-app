import React from "react";
import Card from "../UI/Card";
import "./UserList.css";
import ListItem from "./ListItem";

const UserList = (props) => {
  return (
    <Card>
      <div className="users">
        <ListItem userData={props.userData} />
      </div>
    </Card>
  );
};

export default UserList;
