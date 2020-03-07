import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
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
  font-weight: bold;
  @media only screen and (max-width: 599px) {
    padding-top: 5px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 10px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 10px;
    font-size: 13px;
  }
  @media only screen and (min-width: 1800px) {
    padding-top: 15px;
    font-size: 14px;
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
    width: 24px;
    height: 24px;
  }
  @media only screen and (min-width: 600px) {
    width: 28px;
    height: 28px;
  }
  @media only screen and (min-width: 1200px) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: 1800px) {
    width: 36px;
    height: 36px;
  }
`;

const NumberText = styled.div``;

export default withRouter(({ platformLocation, dataCount, location }) => {
  return (
    <BoardNext>
      <BoardNextDiv>
        <NumberDiv>
          <NumberBox
            style={
              location.pathname === `/rank/${platformLocation}/1`
                ? {
                    backgroundColor: Theme.orangeColor,
                    color: Theme.whiteColor
                  }
                : null
            }
            to={`/rank/${platformLocation}/1`}
          >
            <NumberText>1</NumberText>
          </NumberBox>
          {dataCount > 20 && (
            <NumberBox
              style={
                location.pathname === `/rank/${platformLocation}/2`
                  ? {
                      backgroundColor: Theme.orangeColor,
                      color: Theme.whiteColor
                    }
                  : null
              }
              to={`/rank/${platformLocation}/2`}
            >
              <NumberText>2</NumberText>
            </NumberBox>
          )}
          {dataCount > 40 && (
            <NumberBox
              style={
                location.pathname === `/rank/${platformLocation}/3`
                  ? {
                      backgroundColor: Theme.orangeColor,
                      color: Theme.whiteColor
                    }
                  : null
              }
              to={`/rank/${platformLocation}/3`}
            >
              <NumberText>3</NumberText>
            </NumberBox>
          )}
          {dataCount > 60 && (
            <NumberBox
              style={
                location.pathname === `/rank/${platformLocation}/4`
                  ? {
                      backgroundColor: Theme.orangeColor,
                      color: Theme.whiteColor
                    }
                  : null
              }
              to={`/rank/${platformLocation}/4`}
            >
              <NumberText>4</NumberText>
            </NumberBox>
          )}
          {dataCount > 80 && (
            <NumberBox
              style={
                location.pathname === `/rank/${platformLocation}/5`
                  ? {
                      backgroundColor: Theme.orangeColor,
                      color: Theme.whiteColor
                    }
                  : null
              }
              to={`/rank/${platformLocation}/5`}
            >
              <NumberText>5</NumberText>
            </NumberBox>
          )}
          {dataCount > 100 && (
            <NumberBox
              style={
                location.pathname === `/rank/${platformLocation}/6`
                  ? {
                      backgroundColor: Theme.orangeColor,
                      color: Theme.whiteColor
                    }
                  : null
              }
              to={`/rank/${platformLocation}/6`}
            >
              <NumberText>6</NumberText>
            </NumberBox>
          )}
        </NumberDiv>
      </BoardNextDiv>
    </BoardNext>
  );
});
