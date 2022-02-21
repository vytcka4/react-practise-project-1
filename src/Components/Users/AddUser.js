import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

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
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <LabelStyled htmlFor="username">Username</LabelStyled>
        <InputStyled id="username" type="text"></InputStyled>
        <LabelStyled htmlFor="username">Age (years)</LabelStyled>
        <InputStyled id="username" type="number"></InputStyled>
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
}

export default AddUser;
