import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EsnMenuButton = ({ item }) => (
  <Link to={item.url}>
    <ButtonContainer>{item.title}</ButtonContainer>
  </Link>
);

const ButtonContainer = styled.div`
  color: #bbb;
  padding: 0 12px;
  font-size: 16px;
  line-height: 34px;
  height: auto;
  cursor: pointer;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #f57b20;
    color: white;
  }
`;

export default EsnMenuButton;
