import React from "react";
import styled from "styled-components";

const ContestTitle = styled.div`
  width: 100%;
  background-color: ${props => props.theme.darkGrayColor};
  color: ${props => props.theme.whiteColor};
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 599px) {
    height: 20px;
    font-size: 14px;
  }
  @media only screen and (min-width: 600px) {
    height: 30px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
    height: 40px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1800px) {
    height: 50px;
    font-size: 18px;
  }
`;

const TitleText = styled.div`
  font-weight: bold;
  margin-left: 15px;
`;

export default ({ titleText }) => {
  return (
    <ContestTitle>
      <TitleText>{titleText}</TitleText>
    </ContestTitle>
  );
};
