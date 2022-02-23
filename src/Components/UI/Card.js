import React from "react";
import styled from "styled-components";
import classes from "./Card.module.css";

// const CardStyle = styled.div`
//   background-color: white;
//   box-shadow: 0 2px 8px rgba(0, 8, 20, 0.26);
//   border-radius: 10px;
//   margin: 2rem auto;
//   padding: 1rem;
//   width: 90%;
//   max-width: 40rem;
//   background-color: rgba(0, 8, 20, 0.26);
// `;

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
