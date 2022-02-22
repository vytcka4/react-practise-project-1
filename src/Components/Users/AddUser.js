import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";

const InputStyled = styled.input`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const LabelStyled = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

function AddUser(props) {
  const [enterdUsername, setEnteredUsername] = useState("");
  const [enterdAge, setEnteredAge] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const userNameHandler = (event) => {
    if (event.target.value.length > 0) {
      setEnteredUsername(event.target.value);
    } else {
    }
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <LabelStyled htmlFor="username">Username</LabelStyled>
        <InputStyled
          id="username"
          type="text"
          onChange={userNameHandler}
        ></InputStyled>
        <LabelStyled htmlFor="username">Age (years)</LabelStyled>
        <InputStyled
          id="username"
          type="number"
          onChange={ageHandler}
        ></InputStyled>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}

export default AddUser;
