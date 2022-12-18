import React from "react";
import { User } from "../shared/types/UsersTypes";

export const List: React.FC<User> = ({ user }) => {
    
  const renderElements = (): JSX.Element[] => {
    return user.map((users, index) => {
      return (
        <li key={index}>
          <a>{users.name}</a>
        </li>
      );
    });
  };

  return <ul>{renderElements()}</ul>;
};
