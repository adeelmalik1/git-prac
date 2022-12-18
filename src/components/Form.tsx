import React, { useState } from "react";
import { User } from "../shared/types/UsersTypes";

interface IProps {
  user: User["user"];
  setUser: React.Dispatch<React.SetStateAction<User["user"]>>;
}

export const Form: React.FC<IProps> = ({ user, setUser }) => {
 
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    note: "",
  });

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
   
    if (
      !inputValue.email ||
      !inputValue.name ||
      !inputValue.note ||
      !inputValue.password
    ) {
      return;
    }
  
    setUser([
      ...user,
      {
        name: inputValue.name,
        email: inputValue.email,
        password: inputValue.password,
        note: inputValue.note,
      },
    ]);
   
    setInputValue({
      name: "",
      email: "",
      password: "",
      note: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={inputHandler}
        placeholder="your name"
      />
      <input
        type="email"
        name="email"
        value={inputValue.email}
        onChange={inputHandler}
        placeholder="your email"
      />
      <input
        type="password"
        name="password"
        value={inputValue.password}
        onChange={inputHandler}
        placeholder="your password"
      />
      <textarea
        name="note"
        value={inputValue.note}
        onChange={inputHandler}
        placeholder="your detail"
      />
      <button type="submit"></button>
    </form>
  );
};
