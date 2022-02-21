import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 8, 20, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: rgba(0, 8, 20, 0.26);
`;

function Card(props) {
  return <CardStyle>{props.children}</CardStyle>;
}

export default Card;
