import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import Userlist from "./Components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <Userlist users={userList} />
    </div>
  );
}

export default App;
