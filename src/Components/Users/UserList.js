import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 8, 20, 0.26);
  border-radius: 10px;
  margin: 2rem auto;
  background-color: rgba(0, 8, 20, 0.26);
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const StyledLi = styled.li`
  border: 1px solid black;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: white;
`;
function Userlist(props) {
  return (
    <StyledUser>
      <StyledUl>
        {props.users.map((user) => {
          return (
            <StyledLi key={user.id}>
              {user.name} ({user.age})
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledUser>
  );
}

export default Userlist;
