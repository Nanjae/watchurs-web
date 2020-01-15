import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Theme from "../../Styles/Theme";

const BoardNext = styled.div``;

const BoardNextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  user-select: none;
  background-color: ${props => props.theme.grayColor};
  color: ${props => props.theme.darkOrangeColor};
  @media only screen and (max-width: 599px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 20px 0px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const NumberDiv = styled.div`
  display: flex;
`;

const NumberBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.whiteColor};
  border-top: 1px solid ${props => props.theme.lightGrayColor};
  border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  border-right: 1px solid ${props => props.theme.lightGrayColor};
  :first-child {
    border-left: 1px solid ${props => props.theme.lightGrayColor};
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  :last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  @media only screen and (max-width: 599px) {
    width: 5%;
  }
  @media only screen and (min-width: 600px) {
    width: 7%;
  }
  @media only screen and (min-width: 1200px) {
    width: 7%;
  }
  @media only screen and (min-width: 1800px) {
    width: 36px;
    height: 36px;
  }
`;

const NumberText = styled.div``;

export default () => {
  return (
    <BoardNext>
      <BoardNextDiv>
        <NumberDiv>
          <NumberBox
            style={{
              backgroundColor: Theme.orangeColor,
              color: Theme.whiteColor
            }}
            to="/rank/1"
          >
            <NumberText>1</NumberText>
          </NumberBox>
          <NumberBox to="/rank/2">
            <NumberText>2</NumberText>
          </NumberBox>
          <NumberBox to="/rank/3">
            <NumberText>3</NumberText>
          </NumberBox>
          <NumberBox to={"/rank/4"}>
            <NumberText>4</NumberText>
          </NumberBox>
        </NumberDiv>
      </BoardNextDiv>
    </BoardNext>
  );
};
