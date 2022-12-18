import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { User } from "./shared/types/UsersTypes";
import { List } from "./components/List";
import { Form } from "./components/Form";

const App = () => {
  const [user, setUser] = useState<User["user"]>([
    {
      name: "adeel",
      email:"adeeladi0014@",
      password: "admin",
      note: "",
    },
  ]);
  
  return (
    <div className="App">
      <header className="App-header">
        <List user={user} />
        <Form setUser={setUser} user={user}/>
      </header>
    </div>
  );
};

export default App;
